import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/service/prisma.service";
import { EUserRole } from "generated/prisma";

/**
 * DashboardRepository
 * --------------------
 * Chỉ chịu trách nhiệm truy cập database (Prisma) cho module Dashboard.
 * Không chứa business logic, không map DTO. Service gọi repo và map sang DTO.
 */

export interface GetUsersRepoParams {
  page: number;
  pageSize: number;
  search?: string;
  role?: EUserRole;
  status?: string;
}

export interface GetPostsRepoParams {
  page: number;
  pageSize: number;
  authorId?: string;
  from?: string;
  to?: string;
}

export interface GetCommentsRepoParams {
  page: number;
  pageSize: number;
  postId?: string;
  authorId?: string;
}

@Injectable()
export class DashboardRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Đếm user, post, comment; đếm user mới trong khoảng from–to (nếu có).
   */
  async getStats(fromDate?: Date, toDate?: Date) {
    const whereUser =
      fromDate || toDate
        ? {
            createdAt: {
              ...(fromDate && { gte: fromDate }),
              ...(toDate && { lte: toDate }),
            },
          }
        : undefined;

    const [totalUsers, newUsersInRange, totalPosts, totalComments] =
      await this.prisma.$transaction([
        this.prisma.user.count(),
        this.prisma.user.count({ where: whereUser }),
        this.prisma.post.count(),
        this.prisma.comment.count(),
      ]);

    return {
      totalUsers,
      newUsersInRange,
      totalPosts,
      totalComments,
    };
  }

  /**
   * Danh sách user có phân trang và bộ lọc.
   */
  async getUsers(params: GetUsersRepoParams) {
    const { page, pageSize, search, role, status } = params;
    const skip = (page - 1) * pageSize;

    const where: any = {};
    if (search?.trim()) {
      const term = search.trim();
      where.OR = [
        { name: { contains: term } },
        { email: { contains: term } },
      ];
    }
    if (status) where.status = status;
    if (role) {
      where.roles = {
        some: { role: { name: role } },
      };
    }

    const [items, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
          level: true,
          status: true,
          createdAt: true,
          roles: {
            include: {
              role: { select: { id: true, name: true, displayName: true } },
            },
          },
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return { items, total };
  }

  /**
   * Chi tiết user theo id (kèm roles). Trả về null nếu không tồn tại.
   */
  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        level: true,
        xp: true,
        streak: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        roles: {
          include: {
            role: { select: { id: true, name: true, displayName: true } },
          },
        },
      },
    });
  }

  /**
   * Lấy role theo id.
   */
  async getRoleById(roleId: string) {
    return this.prisma.role.findUnique({
      where: { id: roleId },
    });
  }

  /**
   * Lấy role theo name (EUserRole).
   */
  async getRoleByName(name: EUserRole) {
    return this.prisma.role.findUnique({
      where: { name },
    });
  }

  /**
   * Gán một role duy nhất cho user (xoá hết role cũ, tạo một bản ghi UserRole mới).
   */
  async setUserRole(userId: string, roleId: string) {
    await this.prisma.userRole.deleteMany({ where: { userId } });
    await this.prisma.userRole.create({
      data: { userId, roleId },
    });
  }

  /**
   * Cập nhật status của user.
   */
  async updateUserStatus(userId: string, status: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { status },
    });
  }

  /**
   * Danh sách bài viết có phân trang và bộ lọc.
   */
  async getPosts(params: GetPostsRepoParams) {
    const { page, pageSize, authorId, from, to } = params;
    const skip = (page - 1) * pageSize;

    const where: any = {};
    if (authorId) where.authorId = authorId;
    if (from || to) {
      where.createdAt = {
        ...(from && { gte: new Date(from) }),
        ...(to && { lte: new Date(to) }),
      };
    }

    const [items, total] = await this.prisma.$transaction([
      this.prisma.post.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        include: {
          author: {
            select: { id: true, name: true, email: true, avatarUrl: true },
          },
        },
      }),
      this.prisma.post.count({ where }),
    ]);

    return { items, total };
  }

  /**
   * Chi tiết bài viết theo id (kèm author và comments). Trả về null nếu không tồn tại.
   */
  async getPostById(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, email: true, avatarUrl: true },
        },
        comments: {
          orderBy: { createdAt: "desc" },
          include: {
            author: {
              select: { id: true, name: true, avatarUrl: true },
            },
          },
        },
      },
    });
  }

  /**
   * Xóa bài viết và toàn bộ like, comment liên quan.
   */
  async deletePost(id: string) {
    await this.prisma.$transaction([
      this.prisma.like.deleteMany({ where: { postId: id } }),
      this.prisma.comment.deleteMany({ where: { postId: id } }),
      this.prisma.post.delete({ where: { id } }),
    ]);
  }

  /**
   * Danh sách comment có phân trang và bộ lọc.
   */
  async getComments(params: GetCommentsRepoParams) {
    const { page, pageSize, postId, authorId } = params;
    const skip = (page - 1) * pageSize;

    const where: any = {};
    if (postId) where.postId = postId;
    if (authorId) where.authorId = authorId;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.comment.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        include: {
          author: {
            select: { id: true, name: true, avatarUrl: true },
          },
          post: {
            select: { id: true, content: true },
          },
        },
      }),
      this.prisma.comment.count({ where }),
    ]);

    return { items, total };
  }

  /**
   * Lấy comment theo id. Trả về null nếu không tồn tại.
   */
  async getCommentById(id: string) {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  /**
   * Xóa comment và giảm commentsCount của post tương ứng.
   */
  async deleteComment(commentId: string, postId: string) {
    await this.prisma.$transaction([
      this.prisma.comment.delete({ where: { id: commentId } }),
      this.prisma.post.update({
        where: { id: postId },
        data: { commentsCount: { decrement: 1 } },
      }),
    ]);
  }
}
