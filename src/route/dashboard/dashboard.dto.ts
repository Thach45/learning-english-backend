import { Type } from "class-transformer";
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { EUserRole } from "generated/prisma";

// ========== Query DTOs ==========

/** Query thống kê: from, to (ISO date string). */
export class GetStatsQueryDto {
  @IsOptional()
  @IsString()
  from?: string;

  @IsOptional()
  @IsString()
  to?: string;
}

/** Query danh sách user: phân trang, search, lọc role/status. */
export class GetUsersQueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pageSize?: number;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsIn(["ADMIN", "MODERATOR", "USER"])
  role?: EUserRole;

  @IsOptional()
  @IsIn(["active", "suspended", "banned"])
  status?: string;
}

/** Query danh sách bài viết: phân trang, authorId, from, to. */
export class GetPostsQueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pageSize?: number;

  @IsOptional()
  @IsString()
  authorId?: string;

  @IsOptional()
  @IsString()
  from?: string;

  @IsOptional()
  @IsString()
  to?: string;
}

/** Query danh sách comment: phân trang, postId, authorId. */
export class GetCommentsQueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pageSize?: number;

  @IsOptional()
  @IsString()
  postId?: string;

  @IsOptional()
  @IsString()
  authorId?: string;
}

// ========== Body DTOs ==========

/** Body đổi role user: roleId hoặc roleName (bắt buộc một trong hai). */
export class UpdateUserRoleDto {
  @IsOptional()
  @IsString()
  roleId?: string;

  @IsOptional()
  @IsIn(["ADMIN", "MODERATOR", "USER"])
  roleName?: EUserRole;
}

/** Body cập nhật trạng thái user. */
export class UpdateUserStatusDto {
  @IsIn(["active", "suspended", "banned"])
  @IsString()
  status: string;
}

// ========== Response DTOs - Pagination ==========

export class DashboardPaginationDto {
  page: number;
  pageSize: number;
  total: number;

  constructor(partial: Partial<DashboardPaginationDto>) {
    Object.assign(this, partial);
  }
}

// ========== Response DTOs - Stats ==========

export class DashboardStatsResponseDto {
  totalUsers: number;
  newUsersInRange: number;
  totalPosts: number;
  totalComments: number;
  from?: string;
  to?: string;

  constructor(partial: Partial<DashboardStatsResponseDto>) {
    Object.assign(this, partial);
  }
}

// ========== Response DTOs - User ==========

export class DashboardRoleDto {
  id: string;
  name: string;
  displayName: string;

  constructor(partial: Partial<DashboardRoleDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardUserItemDto {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  level: number;
  status: string;
  createdAt: Date;
  roles: DashboardRoleDto[];

  constructor(partial: Partial<DashboardUserItemDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardUserDetailDto {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  level: number;
  xp: number;
  streak: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  roles: DashboardRoleDto[];

  constructor(partial: Partial<DashboardUserDetailDto>) {
    Object.assign(this, partial);
  }
}

export class GetUsersResponseDto {
  @ValidateNested({ each: true })
  @Type(() => DashboardUserItemDto)
  items: DashboardUserItemDto[];

  pagination: DashboardPaginationDto;

  constructor(partial: Partial<GetUsersResponseDto>) {
    Object.assign(this, partial);
  }
}

export class UpdateUserStatusResponseDto {
  message: string;
  user: DashboardUserDetailDto;

  constructor(partial: Partial<UpdateUserStatusResponseDto>) {
    Object.assign(this, partial);
  }
}

// ========== Response DTOs - Post ==========

export class DashboardAuthorDto {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;

  constructor(partial: Partial<DashboardAuthorDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardPostItemDto {
  id: string;
  authorId: string;
  content: string | null;
  imageUrls: string[];
  type: string;
  likesCount: number;
  commentsCount: number;
  createdAt: Date;
  author: DashboardAuthorDto;

  constructor(partial: Partial<DashboardPostItemDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardCommentAuthorDto {
  id: string;
  name: string;
  avatarUrl: string | null;

  constructor(partial: Partial<DashboardCommentAuthorDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardCommentInPostDto {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  createdAt: Date;
  author: DashboardCommentAuthorDto;

  constructor(partial: Partial<DashboardCommentInPostDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardPostDetailDto {
  id: string;
  authorId: string;
  content: string | null;
  imageUrls: string[];
  type: string;
  likesCount: number;
  commentsCount: number;
  createdAt: Date;
  author: DashboardAuthorDto;
  comments: DashboardCommentInPostDto[];

  constructor(partial: Partial<DashboardPostDetailDto>) {
    Object.assign(this, partial);
  }
}

export class GetPostsResponseDto {
  @ValidateNested({ each: true })
  @Type(() => DashboardPostItemDto)
  items: DashboardPostItemDto[];

  pagination: DashboardPaginationDto;

  constructor(partial: Partial<GetPostsResponseDto>) {
    Object.assign(this, partial);
  }
}

export class DeletePostResponseDto {
  message: string;

  constructor(partial: Partial<DeletePostResponseDto>) {
    Object.assign(this, partial);
  }
}

// ========== Response DTOs - Comment ==========

export class DashboardPostSummaryDto {
  id: string;
  content: string | null;

  constructor(partial: Partial<DashboardPostSummaryDto>) {
    Object.assign(this, partial);
  }
}

export class DashboardCommentItemDto {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  createdAt: Date;
  author: DashboardCommentAuthorDto;
  post: DashboardPostSummaryDto;

  constructor(partial: Partial<DashboardCommentItemDto>) {
    Object.assign(this, partial);
  }
}

export class GetCommentsResponseDto {
  @ValidateNested({ each: true })
  @Type(() => DashboardCommentItemDto)
  items: DashboardCommentItemDto[];

  pagination: DashboardPaginationDto;

  constructor(partial: Partial<GetCommentsResponseDto>) {
    Object.assign(this, partial);
  }
}

export class DeleteCommentResponseDto {
  message: string;

  constructor(partial: Partial<DeleteCommentResponseDto>) {
    Object.assign(this, partial);
  }
}
