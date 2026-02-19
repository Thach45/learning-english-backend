import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { Auth } from "src/shared/decorator/auth.decorator";
import { Roles } from "src/shared/decorator/roles.decorator";
import { AuthenticationGuard } from "src/shared/guards/authentication.guard";
import { AuthorizationGuard } from "src/shared/guards/authorization.guard";
import { EUserRole } from "generated/prisma";

import {
  GetStatsQueryDto,
  GetUsersQueryDto,
  GetPostsQueryDto,
  GetCommentsQueryDto,
  UpdateUserRoleDto,
  UpdateUserStatusDto,
  DashboardStatsResponseDto,
  GetUsersResponseDto,
  DashboardUserDetailDto,
  UpdateUserStatusResponseDto,
  GetPostsResponseDto,
  DashboardPostDetailDto,
  DeletePostResponseDto,
  GetCommentsResponseDto,
  DeleteCommentResponseDto,
} from "./dashboard.dto";
import { DashboardService } from "./dashboard.service";

/**
 * Dashboard Controller
 * -------------------
 * Các endpoint quản lý hệ thống. Yêu cầu:
 * - Đăng nhập (AuthenticationGuard)
 * - Có role ADMIN hoặc MODERATOR (@Roles)
 * - Có permission trùng path + method trong DB (AuthorizationGuard)
 */
@Controller("dashboard")
@Auth(["access-token"], "or")
@Roles(EUserRole.ADMIN, EUserRole.MODERATOR)
@UseGuards(AuthenticationGuard, AuthorizationGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  // ========== Thống kê tổng quan ==========

  /**
   * GET /dashboard/stats
   * Thống kê tổng quan: số user, post, comment, user mới (tùy chọn from/to).
   */
  @Get("stats")
  async getStats(
    @Query() query: GetStatsQueryDto,
  ): Promise<{ data: DashboardStatsResponseDto }> {
    const data = await this.dashboardService.getStats(query);
    return { data };
  }

  // ========== Quản lý user ==========

  /**
   * GET /dashboard/users
   * Danh sách user: phân trang, tìm kiếm, lọc role/status.
   */
  @Get("users")
  async getUsers(
    @Query() query: GetUsersQueryDto,
  ): Promise<{ data: GetUsersResponseDto }> {
    const data = await this.dashboardService.getUsers(query);
    return { data };
  }

  /**
   * GET /dashboard/users/:id
   * Chi tiết user (thông tin + roles).
   */
  @Get("users/:id")
  async getUserById(
    @Param("id") id: string,
  ): Promise<{ data: DashboardUserDetailDto }> {
    const data = await this.dashboardService.getUserById(id);
    return { data };
  }

  /**
   * PUT /dashboard/users/:id/role
   * Đổi role user (body: roleId hoặc roleName).
   */
  @Put("users/:id/role")
  async updateUserRole(
    @Param("id") userId: string,
    @Body() body: UpdateUserRoleDto,
  ): Promise<{ data: DashboardUserDetailDto }> {
    const data = await this.dashboardService.updateUserRole(userId, body);
    return { data };
  }

  /**
   * PUT /dashboard/users/:id/status
   * Cập nhật trạng thái user: active | suspended | banned.
   */
  @Put("users/:id/status")
  async updateUserStatus(
    @Param("id") userId: string,
    @Body() body: UpdateUserStatusDto,
  ): Promise<{ data: UpdateUserStatusResponseDto }> {
    const data = await this.dashboardService.updateUserStatus(userId, body);
    return { data };
  }

  // ========== Kiểm duyệt bài viết ==========

  /**
   * GET /dashboard/posts
   * Danh sách bài viết: phân trang, lọc authorId/from/to.
   */
  @Get("posts")
  async getPosts(
    @Query() query: GetPostsQueryDto,
  ): Promise<{ data: GetPostsResponseDto }> {
    const data = await this.dashboardService.getPosts(query);
    return { data };
  }

  /**
   * GET /dashboard/posts/:id
   * Chi tiết bài viết kèm comments.
   */
  @Get("posts/:id")
  async getPostById(
    @Param("id") id: string,
  ): Promise<{ data: DashboardPostDetailDto }> {
    const data = await this.dashboardService.getPostById(id);
    return { data };
  }

  /**
   * DELETE /dashboard/posts/:id
   * Xóa bài viết (force delete bởi admin/moderator).
   */
  @Delete("posts/:id")
  async deletePost(
    @Param("id") id: string,
  ): Promise<{ data: DeletePostResponseDto }> {
    const data = await this.dashboardService.deletePost(id);
    return { data };
  }

  // ========== Kiểm duyệt comment ==========

  /**
   * GET /dashboard/comments
   * Danh sách comment: phân trang, lọc postId/authorId.
   */
  @Get("comments")
  async getComments(
    @Query() query: GetCommentsQueryDto,
  ): Promise<{ data: GetCommentsResponseDto }> {
    const data = await this.dashboardService.getComments(query);
    return { data };
  }

  /**
   * DELETE /dashboard/comments/:id
   * Xóa comment (force delete bởi admin/moderator).
   */
  @Delete("comments/:id")
  async deleteComment(
    @Param("id") id: string,
  ): Promise<{ data: DeleteCommentResponseDto }> {
    const data = await this.dashboardService.deleteComment(id);
    return { data };
  }
}
