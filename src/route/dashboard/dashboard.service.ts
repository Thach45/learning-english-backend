import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  GetStatsQueryDto,
  GetUsersQueryDto,
  GetPostsQueryDto,
  GetCommentsQueryDto,
  UpdateUserRoleDto,
  UpdateUserStatusDto,
  DashboardStatsResponseDto,
  DashboardPaginationDto,
  DashboardUserItemDto,
  DashboardUserDetailDto,
  DashboardRoleDto,
  GetUsersResponseDto,
  UpdateUserStatusResponseDto,
  DashboardPostItemDto,
  DashboardPostDetailDto,
  DashboardAuthorDto,
  DashboardCommentInPostDto,
  DashboardCommentAuthorDto,
  GetPostsResponseDto,
  DeletePostResponseDto,
  DashboardCommentItemDto,
  DashboardPostSummaryDto,
  GetCommentsResponseDto,
  DeleteCommentResponseDto,
} from "./dashboard.dto";
import { DashboardRepository } from "./dashboard.repo";

/**
 * DashboardService
 * ----------------
 * Chứa business logic và mapping DTO. Mọi thao tác database đi qua DashboardRepository.
 */
@Injectable()
export class DashboardService {
  constructor(private readonly dashboardRepo: DashboardRepository) {}

  async getStats(query: GetStatsQueryDto): Promise<DashboardStatsResponseDto> {
    const fromDate = query.from ? new Date(query.from) : undefined;
    const toDate = query.to ? new Date(query.to) : undefined;

    const raw = await this.dashboardRepo.getStats(fromDate, toDate);

    return new DashboardStatsResponseDto({
      ...raw,
      ...(fromDate && { from: fromDate.toISOString() }),
      ...(toDate && { to: toDate.toISOString() }),
    });
  }

  async getUsers(query: GetUsersQueryDto): Promise<GetUsersResponseDto> {
    const page = query.page && query.page > 0 ? query.page : 1;
    const pageSize =
      query.pageSize && query.pageSize > 0 ? Math.min(query.pageSize, 50) : 20;

    const { items, total } = await this.dashboardRepo.getUsers({
      page,
      pageSize,
      search: query.search,
      role: query.role,
      status: query.status,
    });

    const dtoItems = items.map((u) => {
      const roles = (u.roles || []).map((ur: any) => new DashboardRoleDto(ur.role));
      return new DashboardUserItemDto({
        id: u.id,
        name: u.name,
        email: u.email,
        avatarUrl: u.avatarUrl,
        level: u.level,
        status: u.status,
        createdAt: u.createdAt,
        roles,
      });
    });

    return new GetUsersResponseDto({
      items: dtoItems,
      pagination: new DashboardPaginationDto({ page, pageSize, total }),
    });
  }

  async getUserById(id: string): Promise<DashboardUserDetailDto> {
    const user = await this.dashboardRepo.getUserById(id);
    if (!user) {
      throw new NotFoundException("User không tồn tại");
    }
    const roles = (user.roles || []).map((ur: any) => new DashboardRoleDto(ur.role));
    return new DashboardUserDetailDto({
      id: user.id,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
      level: user.level,
      xp: user.xp,
      streak: user.streak,
      status: user.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      roles,
    });
  }

  async updateUserRole(
    userId: string,
    dto: UpdateUserRoleDto,
  ): Promise<DashboardUserDetailDto> {
    const user = await this.dashboardRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundException("User không tồn tại");
    }

    let roleId: string;
    if (dto.roleId) {
      const role = await this.dashboardRepo.getRoleById(dto.roleId);
      if (!role) {
        throw new NotFoundException("Role không tồn tại");
      }
      roleId = role.id;
    } else if (dto.roleName) {
      const role = await this.dashboardRepo.getRoleByName(dto.roleName);
      if (!role) {
        throw new NotFoundException("Role không tồn tại");
      }
      roleId = role.id;
    } else {
      throw new BadRequestException("Cần truyền roleId hoặc roleName");
    }

    await this.dashboardRepo.setUserRole(userId, roleId);
    return this.getUserById(userId);
  }

  async updateUserStatus(
    userId: string,
    dto: UpdateUserStatusDto,
  ): Promise<UpdateUserStatusResponseDto> {
    const user = await this.dashboardRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundException("User không tồn tại");
    }

    await this.dashboardRepo.updateUserStatus(userId, dto.status);
    const updated = await this.getUserById(userId);
    return new UpdateUserStatusResponseDto({
      message: "Cập nhật trạng thái thành công",
      user: updated,
    });
  }

  async getPosts(query: GetPostsQueryDto): Promise<GetPostsResponseDto> {
    const page = query.page && query.page > 0 ? query.page : 1;
    const pageSize =
      query.pageSize && query.pageSize > 0 ? Math.min(query.pageSize, 50) : 20;

    const { items, total } = await this.dashboardRepo.getPosts({
      page,
      pageSize,
      authorId: query.authorId,
      from: query.from,
      to: query.to,
    });

    const dtoItems = items.map((p: any) => new DashboardPostItemDto({
      id: p.id,
      authorId: p.authorId,
      content: p.content,
      imageUrls: p.imageUrls ?? [],
      type: p.type,
      likesCount: p.likesCount,
      commentsCount: p.commentsCount,
      createdAt: p.createdAt,
      author: new DashboardAuthorDto(p.author),
    }));

    return new GetPostsResponseDto({
      items: dtoItems,
      pagination: new DashboardPaginationDto({ page, pageSize, total }),
    });
  }

  async getPostById(id: string): Promise<DashboardPostDetailDto> {
    const post = await this.dashboardRepo.getPostById(id);
    if (!post) {
      throw new NotFoundException("Bài viết không tồn tại");
    }

    const comments = (post.comments || []).map((c: any) => new DashboardCommentInPostDto({
      id: c.id,
      content: c.content,
      authorId: c.authorId,
      postId: c.postId,
      createdAt: c.createdAt,
      author: new DashboardCommentAuthorDto(c.author),
    }));

    return new DashboardPostDetailDto({
      id: post.id,
      authorId: post.authorId,
      content: post.content,
      imageUrls: post.imageUrls ?? [],
      type: post.type,
      likesCount: post.likesCount,
      commentsCount: post.commentsCount,
      createdAt: post.createdAt,
      author: new DashboardAuthorDto(post.author),
      comments,
    });
  }

  async deletePost(id: string): Promise<DeletePostResponseDto> {
    const post = await this.dashboardRepo.getPostById(id);
    if (!post) {
      throw new NotFoundException("Bài viết không tồn tại");
    }
    await this.dashboardRepo.deletePost(id);
    return new DeletePostResponseDto({ message: "Đã xóa bài viết" });
  }

  async getComments(query: GetCommentsQueryDto): Promise<GetCommentsResponseDto> {
    const page = query.page && query.page > 0 ? query.page : 1;
    const pageSize =
      query.pageSize && query.pageSize > 0 ? Math.min(query.pageSize, 50) : 20;

    const { items, total } = await this.dashboardRepo.getComments({
      page,
      pageSize,
      postId: query.postId,
      authorId: query.authorId,
    });

    const dtoItems = items.map((c: any) => new DashboardCommentItemDto({
      id: c.id,
      content: c.content,
      authorId: c.authorId,
      postId: c.postId,
      createdAt: c.createdAt,
      author: new DashboardCommentAuthorDto(c.author),
      post: new DashboardPostSummaryDto(c.post),
    }));

    return new GetCommentsResponseDto({
      items: dtoItems,
      pagination: new DashboardPaginationDto({ page, pageSize, total }),
    });
  }

  async deleteComment(id: string): Promise<DeleteCommentResponseDto> {
    const comment = await this.dashboardRepo.getCommentById(id);
    if (!comment) {
      throw new NotFoundException("Bình luận không tồn tại");
    }
    await this.dashboardRepo.deleteComment(id, comment.postId);
    return new DeleteCommentResponseDto({ message: "Đã xóa bình luận" });
  }
}
