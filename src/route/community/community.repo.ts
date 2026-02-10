import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/service/prisma.service";
import { JsonValue } from "generated/prisma/runtime/library";
import { PostType, Privacy } from "generated/prisma";
import { ListFollowersResponseDto, UpdatePostDto } from "./community.dto";

/**
 * CommunityRepository
 * --------------------
 * Chỉ chịu trách nhiệm làm việc trực tiếp với database (Prisma)
 * cho module Community: tạo post, lấy danh sách feed,...
 *
 * Mục tiêu: tách riêng tầng truy cập dữ liệu ra khỏi Service
 * để code dễ đọc hơn và dễ test / refactor sau này.
 */
@Injectable()
export class CommunityRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Tạo một bài post mới trong database.
   * Chỉ nhận dữ liệu đã được xử lý / validate từ Service.
   */
  async createPost(data: {
    authorId: string;
    content: string;
    imageUrls: string[];
    type: PostType;
    privacy: Privacy;
    sharedStudySetId?: string;
    metadata?: Record<string, JsonValue>;
  }) {
    return this.prisma.post.create({ data });
  }

  /**
   * Lấy danh sách post cho Feed kèm tổng số bản ghi để phân trang.
   * Không chứa business logic, chỉ tập trung vào query Prisma.
   */
  async getFeed(params: {
    userId: string;
    page: number;
    pageSize: number;
    typeFilter?: PostType[];
  }) {
    const { userId, page, pageSize, typeFilter } = params;

    const where: any = {
      ...(typeFilter ? { type: { in: typeFilter } } : {}),
      OR: [
        { privacy: Privacy.PUBLIC },
        { privacy: Privacy.FOLLOWERS_ONLY, author: { followedBy: { some: { followerId: userId } } } },
      ],
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.post.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          author: true,
          sharedStudySet: {
            include: {
              author: true,
              vocabularies: true,
              enrollments: {
                select: { userId: true },
              },
              
            },
          },
          likes: {
            where: {
              userId: userId,
            },
            select: {
              id: true,
            },
          }
        },
      }),
      
      this.prisma.post.count({ where }),
    ]);
  
    return { items: items.map((item) => ({
      ...item,
      likes: item.likes.length,
      isLike: item.likes.length > 0 ? true : false,
    })), total };
  }
  async updatePost(userId: string, id: string, dto: UpdatePostDto) {
    try {
      
      const post = await this.prisma.post.update({
        where: { id, authorId: userId },
        data: dto,
      });
      return post;
    } catch (error) {
      throw new BadRequestException("Lỗi khi cập nhật bài viết");
    }
    
  }

  /**
   * Xoá bài post (chỉ author mới được xoá).
   * Xoá luôn likes liên quan để tránh lỗi foreign key.
   */
  async deletePost(userId: string, postId: string) {
    // Kiểm tra post tồn tại và thuộc về user
    const post = await this.prisma.post.findUnique({
      where: { id: postId },
      select: { authorId: true },
    });
    if (!post || post.authorId !== userId) {
      return null;
    }
    // Xoá likes trước, rồi xoá post
    await this.prisma.$transaction([
      this.prisma.like.deleteMany({ where: { postId } }),
      this.prisma.post.delete({ where: { id: postId } }),
    ]);
    return true;
  }
  /**
   * Kiểm tra user đã like post này chưa.
   */
  async checkLikeInPost(userId: string, postId: string) {
    return this.prisma.like.findFirst({
      where: { userId, postId },
    });
  }

  /**
   * Tạo một bản ghi like cho post.
   */
  async createLike(userId: string, postId: string) {
    return this.prisma.like.create({
      data: { userId, postId },
    });
  }

  /**
   * Xoá bản ghi like theo id.
   */
  async deleteLike(id: string) {
    return this.prisma.like.delete({
      where: { id },
    });
  }

  /**
   * Toggle like/unlike cho một post:
   * - Nếu đã like -> xoá like, giảm likesCount.
   * - Nếu chưa like -> tạo like, tăng likesCount.
   *
   * Trả về: { postId, likes, isLiked }
   */
  async reactToPost(userId: string, postId: string): Promise<{ postId: string; likes: number; isLiked: boolean }> {
    const existingLike = await this.checkLikeInPost(userId, postId);

    if (existingLike) {
      const [, updatedPost] = await this.prisma.$transaction([
        this.prisma.like.delete({ where: { id: existingLike.id } }),
        this.prisma.post.update({
          where: { id: postId },
          data: { likesCount: { decrement: 1 } },
        }),
      ]);

      return {
        postId,
        likes: updatedPost.likesCount,
        isLiked: false,
      };
    }

    const [, updatedPost] = await this.prisma.$transaction([
      this.prisma.like.create({ data: { userId, postId } }),
      this.prisma.post.update({
        where: { id: postId },
        data: { likesCount: { increment: 1 } },
      }),
    ]);

    return {
      postId,
      likes: updatedPost.likesCount,
      isLiked: true,
    };
  }

  /**
   * Lấy authorId của một post.
   */
  async getPostAuthorId(postId: string): Promise<string | null> {
    const post = await this.prisma.post.findUnique({
      where: { id: postId },
      select: { authorId: true },
    });
    return post?.authorId || null;
  }

  /**
   * Kiểm tra đã follow user chưa (followerId = user đang đăng nhập, followingId = user được follow).
   */
  async findUserFollow(followerId: string, followingId: string) {
    return this.prisma.userFollow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });
  }

  /**
   * Tạo quan hệ follow user (followerId follow followingId).
   */
  async createUserFollow(followerId: string, followingId: string) {
    return this.prisma.userFollow.create({
      data: {
        followerId,
        followingId,
      },
    });
  }

  /**
   * Xóa quan hệ follow user (theo id bản ghi UserFollow).
   */
  async deleteUserFollow(id: string) {
    return this.prisma.userFollow.delete({
      where: { id },
    });
  }
  /**
   * Lấy danh sách followers của một user.
   */
  async listFollowers(userId: string, page: number, pageSize: number) : Promise<ListFollowersResponseDto> {
    const followers = await this.prisma.userFollow.findMany({
      where: { followingId: userId },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        follower: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
            level: true,
          },
        },
      },
    });
    return {
      items: followers.map((follower) => ({
        id: follower.follower.id,
        name: follower.follower.name,
        avatarUrl: follower.follower.avatarUrl,
        level: follower.follower.level,
      })),
      total: followers.length,
      page,
      pageSize,
    };
  }
  async listFollowing(userId: string, page: number, pageSize: number) {
    const following = await this.prisma.userFollow.findMany({
      where: { followerId: userId },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        following: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
            level: true,
          },
        },
      },
    });
    return {
      items: following.map((following) => ({
        id: following.following.id,
        name: following.following.name,
        avatarUrl: following.following.avatarUrl,
        level: following.following.level,
      })),
      total: following.length,
      page,
      pageSize,
    };
  }
  
}

