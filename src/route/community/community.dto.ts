import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsIn, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { PostType, Privacy } from "generated/prisma";
import { JsonValue } from "generated/prisma/runtime/library";
export type FeedType = 'post' | 'study_set_shared';

export class FeedUser {
    @IsString()
    id: string;
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    avatarUrl?: string;
    @IsOptional()
    @IsNumber()
    level?: number;
   
    @IsBoolean()
    isAuthor: boolean;
}

export class FeedAttachmentStudySet {
    @IsString()
  id: string;
  @IsString()
  title: string;
  @IsNumber()
  termCount: number;
  @IsString()
  author: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
  @IsOptional()
  @IsNumber()
  likesCount?: number;
  @IsOptional()
  @IsString()
  categoryId?: string;
  @IsOptional()
  @IsString()
  level?: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsNumber()
  learnersCount?: number;

  @IsOptional()
  @IsBoolean()
  isEnrolled?: boolean;
}

export class CreatePostDto {
  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];

  @IsOptional()
  @IsString()
  sharedStudySetId?: string;

  @IsOptional()
  @IsIn(["USER_POST", "STUDY_SET_SHARE"])
  type?: PostType;

  @IsOptional()
  @IsIn(["PUBLIC", "FOLLOWERS_ONLY", "PRIVATE"])
  privacy?: Privacy;

  @IsOptional()
  metadata?: Record<string, JsonValue>;
}

export class GetFeedQueryDto {
  @IsOptional()
  
  page?: number;

  @IsOptional()
  
  pageSize?: number;

  @IsOptional()
  @IsString()
  filter?: string;
}
export class PostResponseDto {
  id: string;
  authorId: string;
  content: string | null;
  imageUrls: string[];
  type: string;
  privacy: string;
  sharedStudySetId?: string | null;
  metadata?: Record<string, JsonValue> | null;
  likesCount: number;
  commentsCount: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<PostResponseDto>) {
    Object.assign(this, partial);
  }
}
export class FeedItem {
    id: string;
    type: FeedType;
    user: FeedUser;
    content: string;
    image?: string;
    studySet?: FeedAttachmentStudySet;
    timestamp: string;
    likes: number;
    comments: number;
    isLiked?: boolean;
    isSaved?: boolean;
  }
  export class PaginationDto {
    @IsNumber()
    page: number;
    @IsNumber()
    pageSize: number;
    @IsNumber()
    total: number;
  } 
export class GetPostResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeedItem)
  items: FeedItem[] = [];

  pagination: PaginationDto;

  @IsBoolean()
  isFinished: boolean;

  constructor(partial: Partial<GetPostResponseDto>) {
    Object.assign(this, partial);
  }
}

export class ReactPostResponseDto {
  @IsString()
  postId: string;

  @IsNumber()
  likes: number;

  @IsBoolean()
  isLiked: boolean;

  constructor(partial: Partial<ReactPostResponseDto>) {
    Object.assign(this, partial);
  }
}

/** Response khi follow user (userId = user được follow). */
export class FollowResponseDto {
  @IsString()
  userId: string;

  @IsBoolean()
  isFollowing: boolean;

  constructor(partial: Partial<FollowResponseDto>) {
    Object.assign(this, partial);
  }
}

/** Response khi unfollow user. */
export class UnfollowResponseDto {
  @IsString()
  userId: string;

  @IsBoolean()
  isFollowing: boolean;

  constructor(partial: Partial<UnfollowResponseDto>) {
    Object.assign(this, partial);
  }
}
class FollowerUser {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  avatarUrl?: string | null;
}
export class ListFollowersResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FollowerUser)
  items: FollowerUser[] = [];

  @IsNumber()
  total: number;
  @IsNumber()
  page: number;
  @IsNumber()
  pageSize: number;

  constructor(partial: Partial<ListFollowersResponseDto>) {
    Object.assign(this, partial);
  }
}

export class CheckFollowResponseDto {
  @IsIn(['FOLLOW', 'UNFOLLOW', 'ME'])
  type: 'FOLLOW' | 'UNFOLLOW' | "ME";

  constructor(partial: Partial<CheckFollowResponseDto>) {
    Object.assign(this, partial);
  }
}

export class UpdatePostDto {
  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];

  @IsOptional()
  @IsString()
  sharedStudySetId?: string;
  
  @IsOptional()
  @IsIn(["PUBLIC", "FOLLOWERS_ONLY", "PRIVATE"])
  privacy?: Privacy;
}

export class UpdatePostResponseDto {
  message: string;

  constructor(partial: Partial<UpdatePostResponseDto>) {
    Object.assign(this, partial);
  }
}

export class DeletePostResponseDto {
  @IsString()
  message: string;

  constructor(partial: Partial<DeletePostResponseDto>) {
    Object.assign(this, partial);
  }
}

// --- Comments ---

export class CreateCommentDto {
  @IsString()
  content: string;
}

export class UpdateCommentDto {
  @IsString()
  content: string;
}

export class CommentUser {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  avatarUrl?: string | null;
  @IsOptional()
  @IsNumber()
  level?: number;
}

export class CommentResponseDto {
  id: string;
  content: string;
  postId: string;
  author: CommentUser;
  createdAt: Date;
  updatedAt: Date;
  isAuthor: boolean;

  constructor(partial: Partial<CommentResponseDto>) {
    Object.assign(this, partial);
  }
}

export class GetCommentsResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommentResponseDto)
  items: CommentResponseDto[] = [];

  pagination: PaginationDto;

  constructor(partial: Partial<GetCommentsResponseDto>) {
    Object.assign(this, partial);
  }
}

export class DeleteCommentResponseDto {
  @IsString()
  message: string;

  @IsNumber()
  commentsCount: number;

  constructor(partial: Partial<DeleteCommentResponseDto>) {
    Object.assign(this, partial);
  }
}
