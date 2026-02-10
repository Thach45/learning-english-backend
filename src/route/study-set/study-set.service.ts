import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/shared/service/prisma.service";
import {
  AddVocabularyDto,
  BulkAddVocabularyDto,
  CreateStudySetWithVocabDto,
  UpdateStudySetDto,
  UpdateVocabularyDto,
} from "./study-set.dto";
import { Prisma } from "generated/prisma";
import { GeminiService } from "src/shared/service/ai.service";

@Injectable()
export class StudySetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly geminiService: GeminiService,
  ) {}
  

  async create(dto: CreateStudySetWithVocabDto, userId: string) {
    try {
      const studySet = await this.prisma.studySet.create({
        data: {
          ...dto,
          authorId: userId,
        },
      });
      return studySet;
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Failed to create study set");
    }
  }
 

  async findAll(
    category?: string,
    search?: string,
    pageStr?: string,
    pageSizeStr?: string,
    userId?: string,
  ) {
    const where: Prisma.StudySetWhereInput = {};

    if (category) {
      where.categoryId = category;
    }

    if (userId) {
      where.authorId = userId;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    // Pagination
    const page = Math.max(1, parseInt(pageStr || "1", 10));
    const pageSize = Math.max(
      1,
      Math.min(50, parseInt(pageSizeStr || "6", 10)),
    ); // default 12/page, max 50
    const skip = (page - 1) * pageSize;

    const [total, studySets] = await Promise.all([
      this.prisma.studySet.count({ where }),
      this.prisma.studySet.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { updatedAt: "desc" },
        include: {
          author: {
            select: {
              id: true,
              name: true,
            },
          },
          category: true,
          _count: {
            select: { vocabularies: true },
          },
        },
      }),
    ]);

    return {
      data: studySets.map((set) => {
        const { _count, ...rest } = set;
        return {
          ...rest,
          vocabularyCount: _count.vocabularies,
        };
      }),
      total,
      page,
      pageSize,
    };
  }

  async findOne(id: string) {
    const studySet = await this.prisma.studySet.findUnique({
      where: { id },
      include: {
        vocabularies: true,
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
        category: true,
        enrollments: {
          select: { id: true, userId: true },
        },
      },
    });
    if (!studySet) {
      throw new NotFoundException("Study set not found");
    }
    return studySet;
  }

  async update(id: string, dto: UpdateStudySetDto, userId: string) {
    const studySet = await this.prisma.studySet.findUnique({
      where: { id },
    });

    if (!studySet) {
      throw new NotFoundException("Study set not found");
    }

    if (studySet.authorId !== userId) {
      throw new BadRequestException("You are not the author of this study set");
    }

    return this.prisma.studySet.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string, userId: string) {
    const studySet = await this.prisma.studySet.findUnique({
      where: { id },
    });

    if (!studySet) {
      throw new NotFoundException("Study set not found");
    }

    if (studySet.authorId !== userId) {
      throw new BadRequestException("You are not the author of this study set");
    }

    await this.prisma.vocabulary.deleteMany({
      where: { studySetId: id },
    });

    return this.prisma.studySet.delete({
      where: { id },
    });
  }

  async addVocabulary(
    studySetId: string,
    vocabDto: AddVocabularyDto,
    userId: string,
  ) {
    if (!vocabDto.word || typeof vocabDto.word !== "string") {
      throw new BadRequestException("Từ vựng không hợp lệ");
    }

    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
      select: { authorId: true },
    });

    if (!studySet) {
      throw new NotFoundException("Không tìm thấy bộ từ vựng");
    }

    if (studySet.authorId !== userId) {
      throw new ForbiddenException("Bạn không có quyền sửa bộ từ vựng này");
    }

    const existingVocabulary = await this.prisma.vocabulary.findFirst({
      where: {
        studySetId,
        word: vocabDto.word,
      },
    });

    if (existingVocabulary) {
      throw new ConflictException("Từ vựng đã tồn tại trong bộ từ");
    }

    // ❗ CHỈ catch phần có thể fail kỹ thuật (DB)
    try {
      return await this.prisma.vocabulary.create({
        data: {
          ...vocabDto,
          studySetId,
          createdById: userId,
        },
      });
    } catch (error) {
      console.error("Lỗi tạo từ vựng:", error);
      throw new InternalServerErrorException("Không thể thêm từ vựng");
    }
  }

  async bulkAddVocabulary(
    studySetId: string,
    dto: BulkAddVocabularyDto,
    userId: string,
  ) {
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
      select: { authorId: true },
    });

    if (!studySet) {
      throw new NotFoundException("Study set not found");
    }

    if (studySet.authorId !== userId) {
      throw new ForbiddenException("Bạn không có quyền sửa bộ từ vựng này");
    }

    // Check for duplicates in the request
    const words = dto.vocabularies.map((v) => v.word.toLowerCase().trim());
    const uniqueWords = new Set(words);
    if (uniqueWords.size !== words.length) {
      throw new BadRequestException("Có từ vựng trùng lặp trong danh sách");
    }

    // Check existing vocabularies in database
    const existingVocabs = await this.prisma.vocabulary.findMany({
      where: {
        studySetId,
        word: { in: words },
      },
      select: { word: true },
    });

    const existingWords = new Set(
      existingVocabs.map((v) => v.word.toLowerCase()),
    );
    const newVocabs = dto.vocabularies.filter(
      (v) => !existingWords.has(v.word.toLowerCase().trim()),
    );

    if (newVocabs.length === 0) {
      throw new ConflictException("Tất cả từ vựng đã tồn tại trong bộ từ");
    }

    // Bulk insert using transaction
    try {
      const result = await this.prisma.$transaction(
        newVocabs.map((vocab) =>
          this.prisma.vocabulary.create({
            data: {
              ...vocab,
              studySetId,
              createdById: userId,
            },
          }),
        ),
      );

      return {
        success: result.length,
        total: dto.vocabularies.length,
        skipped: dto.vocabularies.length - result.length,
        data: result,
      };
    } catch (error) {
      console.error("Lỗi bulk add từ vựng:", error);
      throw new InternalServerErrorException("Không thể thêm từ vựng");
    }
  }

  async updateVocabulary(
    studySetId: string,
    vocabularyId: string,
    vocabDto: UpdateVocabularyDto,
    userId: string,
  ) {
    // Check if the user is the author of the study set
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
      include: { vocabularies: { where: { id: vocabularyId } } },
    });

    if (
      !studySet ||
      studySet.authorId !== userId ||
      !studySet.vocabularies.length
    ) {
      throw new Error("Unauthorized or resource not found");
    }

    return this.prisma.vocabulary.update({
      where: { id: vocabularyId },
      data: vocabDto,
    });
  }

  async removeVocabulary(
    studySetId: string,
    vocabularyId: string,
    userId: string,
  ) {
    // Check if the user is the author of the study set
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
      include: { vocabularies: { where: { id: vocabularyId } } },
    });

    if (
      !studySet ||
      studySet.authorId !== userId ||
      !studySet.vocabularies.length
    ) {
      throw new Error("Unauthorized or resource not found");
    }

    return this.prisma.vocabulary.delete({ where: { id: vocabularyId } });
  }

  async toggleLike(studySetId: string, userId: string) {
    const like = await this.prisma.userLikesStudySet.findUnique({
      where: {
        userId_studySetId: {
          userId,
          studySetId,
        },
      },
    });

    if (like) {
      // Unlike
      await this.prisma.userLikesStudySet.delete({ where: { id: like.id } });
      const updated = await this.prisma.studySet.update({
        where: { id: studySetId },
        data: { likesCount: { decrement: 1 } },
      });
      return { liked: false, likesCount: updated.likesCount };
    } else {
      // Like
      await this.prisma.userLikesStudySet.create({
        data: {
          user: { connect: { id: userId } },
          studySet: { connect: { id: studySetId } },
        },
      });
      const updated = await this.prisma.studySet.update({
        where: { id: studySetId },
        data: { likesCount: { increment: 1 } },
      });
      return { liked: true, likesCount: updated.likesCount };
    }
  }

  /**
   * Ghi danh user vào study set để học (không phụ thuộc like).
   * - Chỉ cho phép ghi danh vào bộ public hoặc bộ do chính user tạo.
   * - Idempotent: ghi danh nhiều lần vẫn chỉ tạo 1 bản ghi.
   */
  async enroll(studySetId: string, userId: string) {
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
      select: { id: true, authorId: true, isPublic: true },
    });

    if (!studySet) {
      throw new NotFoundException("Study set not found");
    }

    if (!studySet.isPublic && studySet.authorId !== userId) {
      throw new ForbiddenException("Bạn không thể ghi danh vào bộ từ vựng này");
    }

    const existing = await this.prisma.userStudySetEnrollment.findUnique({
      where: {
        userId_studySetId: {
          userId,
          studySetId,
        },
      },
    });

    if (existing) {
      return { enrolled: true };
    }

    await this.prisma.$transaction([
      this.prisma.userStudySetEnrollment.create({
        data: {
          userId,
          studySetId,
        },
      }),
      this.prisma.studySet.update({
        where: { id: studySetId },
        data: { learnersCount: { increment: 1 } },
      }),
    ]);

    return { enrolled: true };
  }

  /**
   * Lấy danh sách study set mà user đã ghi danh (từ cộng đồng).
   * Loại trừ các bộ do chính user tạo.
   */
  async findEnrolledByUser(userId: string, pageStr?: string, pageSizeStr?: string) {
    const page = Math.max(1, parseInt(pageStr || "1", 10));
    const pageSize = Math.max(1, Math.min(50, parseInt(pageSizeStr || "6", 10)));
    const skip = (page - 1) * pageSize;

    const where: Prisma.StudySetWhereInput = {
      authorId: { not: userId },
      enrollments: {
        some: { userId },
      },
    };

    const [total, studySets] = await Promise.all([
      this.prisma.studySet.count({ where }),
      this.prisma.studySet.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { updatedAt: "desc" },
        include: {
          author: {
            select: {
              id: true,
              name: true,
            },
          },
          category: true,
          _count: {
            select: { vocabularies: true },
          },
        },
      }),
    ]);

    return {
      data: studySets.map((set) => {
        const { _count, ...rest } = set;
        return {
          ...rest,
          vocabularyCount: _count.vocabularies,
        };
      }),
      total,
      page,
      pageSize,
    };
  }

  async findPopular() {
    return this.prisma.studySet.findMany({
      where: { isPublic: true },
      orderBy: { likesCount: "desc" },
      take: 10,
      include: {
        author: { select: { name: true } },
        category: { select: { name: true } },
      },
    });
  }
  async togglePrivacy(studySetId: string, userId: string) {
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
    });
    if (!studySet) {
      throw new NotFoundException("Study set not found");
    }
    if (studySet.authorId !== userId) {
      throw new ForbiddenException("Bạn không có quyền thay đổi quyền riêng tư của bộ từ vựng này");
    }
    return this.prisma.studySet.update({
      where: { id: studySetId },
      data: { isPublic: { set: !studySet.isPublic } },
    });
  }
}
