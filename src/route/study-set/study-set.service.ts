import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';
import { AddVocabularyDto, CreateStudySetWithVocabDto, UpdateStudySetDto, UpdateVocabularyDto } from './study-set.dto';
import { Prisma } from 'generated/prisma';

@Injectable()
export class StudySetService {
    constructor(private readonly prisma: PrismaService) {}

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
            throw new BadRequestException('Failed to create study set');
        }
    }

    async findAll(category?: string, search?: string, pageStr?: string, pageSizeStr?: string) {
        const where: Prisma.StudySetWhereInput = {
            
        };

        if (category) {
            where.categoryId = category;
        }

        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }

        // Pagination
        const page = Math.max(1, parseInt(pageStr || '1', 10));
        const pageSize = Math.max(1, Math.min(50, parseInt(pageSizeStr || "6", 10))); // default 12/page, max 50
        const skip = (page - 1) * pageSize;

        const [total, studySets] = await Promise.all([
            this.prisma.studySet.count({ where }),
            this.prisma.studySet.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { updatedAt: 'desc' },
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    category: true,
                    _count: {
                        select: { vocabularies: true }
                    }
                }
            })
        ]);

        return {
            data: studySets.map(set => {
                const { _count, ...rest } = set;
                return {
                    ...rest,
                    vocabularyCount: _count.vocabularies
                }
            }),
            total,
            page,
            pageSize
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
                        avatarUrl: true
                    }
                },
                category: true,
                likedBy: {
                    select: {
                        id: true
                    }
                }
            }
        });
        if (!studySet) {
            throw new NotFoundException('Study set not found');
        }
        return studySet;
    }

    async update(id: string, dto: UpdateStudySetDto, userId: string) {
        const studySet = await this.prisma.studySet.findUnique({
            where: { id },
        });

        if (!studySet) {
            throw new NotFoundException('Study set not found');
        }

        if (studySet.authorId !== userId) {
            throw new BadRequestException('You are not the author of this study set');
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
            throw new NotFoundException('Study set not found');
        }

        if (studySet.authorId !== userId) {
            throw new BadRequestException('You are not the author of this study set');
        }

        await this.prisma.vocabulary.deleteMany({
            where: { studySetId: id },
        });

        return this.prisma.studySet.delete({
            where: { id },
        });
    }

    async addVocabulary(studySetId: string, vocabDto: AddVocabularyDto, userId: string) {
        // Check if the user is the author of the study set
        const studySet = await this.prisma.studySet.findUnique({ where: { id: studySetId } });
        if (!studySet || studySet.authorId !== userId) {
            throw new BadRequestException('You are not the author of this study set');
        }
        

        return this.prisma.vocabulary.create({
            data: {
                ...vocabDto,
                studySetId,
                createdById: userId,
            }
        });
    }

    async updateVocabulary(studySetId: string, vocabularyId: string, vocabDto: UpdateVocabularyDto, userId: string) {
        // Check if the user is the author of the study set
        const studySet = await this.prisma.studySet.findUnique({
            where: { id: studySetId },
            include: { vocabularies: { where: { id: vocabularyId } } }
        });

        if (!studySet || studySet.authorId !== userId || !studySet.vocabularies.length) {
            throw new Error('Unauthorized or resource not found');
        }

        return this.prisma.vocabulary.update({
            where: { id: vocabularyId },
            data: vocabDto
        });
    }

    async removeVocabulary(studySetId: string, vocabularyId: string, userId: string) {
        // Check if the user is the author of the study set
        const studySet = await this.prisma.studySet.findUnique({
            where: { id: studySetId },
            include: { vocabularies: { where: { id: vocabularyId } } }
        });

        if (!studySet || studySet.authorId !== userId || !studySet.vocabularies.length) {
            throw new Error('Unauthorized or resource not found');
        }

        return this.prisma.vocabulary.delete({ where: { id: vocabularyId } });
    }

    async toggleLike(studySetId: string, userId: string) {
        const like = await this.prisma.userLikesStudySet.findUnique({
            where: {
                userId_studySetId: {
                    userId,
                    studySetId
                }
            }
        });

        if (like) {
            // Unlike
            await this.prisma.userLikesStudySet.delete({ where: { id: like.id } });
            await this.prisma.studySet.update({
                where: { id: studySetId },
                data: { likesCount: { decrement: 1 } }
            });
            return { liked: false };
        } else {
            // Like
            await this.prisma.userLikesStudySet.create({
                data: {
                    user: { connect: { id: userId } },
                    studySet: { connect: { id: studySetId } }
                }
            });
            await this.prisma.studySet.update({
                where: { id: studySetId },
                data: { likesCount: { increment: 1 } }
            });
            return { liked: true };
        }
    }

    async findPopular() {
        return this.prisma.studySet.findMany({
            where: { isPublic: true },
            orderBy: { likesCount: 'desc' },
            take: 10,
            include: {
                author: { select: { name: true } },
                category: { select: { name: true } }
            }
        });
    }
} 