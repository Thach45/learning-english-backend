import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import {
  CreatePostDto,
  GetFeedQueryDto,
  GetPostResponseDto,
  PostResponseDto,
  ReactPostResponseDto,
  FollowResponseDto,
  UnfollowResponseDto,
  ListFollowersResponseDto,
  CheckFollowResponseDto,
  UpdatePostDto,
  UpdatePostResponseDto,
  DeletePostResponseDto,
} from "./community.dto";
import { JsonValue } from "generated/prisma/runtime/library";
import { PostType } from "generated/prisma";
import { CommunityRepository } from "./community.repo";
import { SharedUserRepo } from "src/shared/repo/shared-user";

/**
 * CommunityService
 * ----------------
 * Chứa business logic cho module Community (tính toán, mapping DTO -> DTO trả về).
 * Mọi thao tác database phải đi qua CommunityRepository để code dễ đọc và dễ bảo trì.
 */
@Injectable()
export class CommunityService {
  constructor(private readonly communityRepo: CommunityRepository, private readonly sharedUserRepo: SharedUserRepo) {}


  async createPost(userId: string, dto: CreatePostDto): Promise<PostResponseDto> {
   console.log("dto", dto);
    const post = await this.communityRepo.createPost({
      authorId: userId,
      content: dto.content ?? "",
      imageUrls: dto.imageUrls ?? [],
      type: dto.type || "USER_POST",
      privacy: dto.privacy || "PUBLIC",
      sharedStudySetId: dto.sharedStudySetId,
      metadata: dto.metadata as Record<string, JsonValue> | undefined,
    });

    return new PostResponseDto({
      ...post,
      metadata: post.metadata as Record<string, JsonValue>,
    });
  }
  async updatePost(userId: string, id: string, dto: UpdatePostDto): Promise<UpdatePostResponseDto> {
    const post = await this.communityRepo.updatePost(userId, id, dto);
    if (!post) {
      throw new BadRequestException("Bạn không có quyền cập nhật bài viết này");
    }
    return new UpdatePostResponseDto({ message: "Cập nhật bài viết thành công" });
  }

  async deletePost(userId: string, postId: string): Promise<DeletePostResponseDto> {
    const result = await this.communityRepo.deletePost(userId, postId);
    if (!result) {
      throw new BadRequestException("Bạn không có quyền xoá bài viết này");
    }
    return new DeletePostResponseDto({ message: "Xoá bài viết thành công" });
  }

  async getFeed(userId: string, query: GetFeedQueryDto): Promise<GetPostResponseDto> {
    const page = query.page && query.page > 0 ? query.page : 1;
    const pageSize = query.pageSize && query.pageSize > 0 ? Math.min(query.pageSize, 50) : 20;

    let typeFilter: PostType[] | undefined;
    // Hiện tại chỉ còn 2 loại post: USER_POST và STUDY_SET_SHARE
    // Nếu client truyền filter = "posts" thì filter cả hai loại, còn lại = all.
    if (query.filter === "posts") {
      typeFilter = ["USER_POST", "STUDY_SET_SHARE"];
    }

    const { items, total } = await this.communityRepo.getFeed({
      userId,
      page,
      pageSize,
      typeFilter,
    });

    const feedItems = items.map((post) => {
      const feedType: "post" | "study_set_shared" =
        post.type === "STUDY_SET_SHARE" ? "study_set_shared" : "post";

      return {
        id: post.id,
        type: feedType,
        user: {
          id: post.author.id,
          name: post.author.name,
          avatarUrl: post.author.avatarUrl || undefined,
          level: post.author.level,
          isAuthor: post.author.id === userId,
        },
        content: post.content || "",
        image: post.imageUrls?.[0],
        studySet: post.sharedStudySet
          ? {
              id: post.sharedStudySet.id,
              title: post.sharedStudySet.title,
              termCount: post.sharedStudySet.vocabularies?.length || 0,
              author: post.sharedStudySet.author.name,
              description: post.sharedStudySet.description || undefined,
              isPublic: post.sharedStudySet.isPublic,
              likesCount: post.sharedStudySet.likesCount,
              learnersCount: post.sharedStudySet.learnersCount,
              categoryId: post.sharedStudySet.categoryId,
              level: post.sharedStudySet.level,
              tags: post.sharedStudySet.tags,
              isEnrolled:
                Array.isArray((post.sharedStudySet as any).enrollments) &&
                (post.sharedStudySet as any).enrollments.some(
                  (e: any) => e.userId === userId,
                ),
            }
          : undefined,
        timestamp: post.createdAt.toISOString(),
        likes: post.likesCount,
        comments: post.commentsCount,
        isLiked: post.isLike,
        isSaved: false,
      };
    });

    return {
      items: feedItems as any,
      pagination: {
        page,
        pageSize,
        total,
      },
      isFinished: page * pageSize >= total,
    };
  }
  async reactToPost(userId: string, id: string): Promise<ReactPostResponseDto> {
    // kiểm tra user 
    const user = await this.sharedUserRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    const result = await this.communityRepo.reactToPost(userId, id);
    return new ReactPostResponseDto(result);
  }

  /**
   * Follow user theo userId (followerId = actor, followingId = targetUserId).
   * Nếu đã follow rồi thì trả về isFollowing = true, không tạo bản ghi mới.
   */
  async followUser(actorUserId: string, targetUserId: string): Promise<FollowResponseDto> {
    if (actorUserId === targetUserId) {
      throw new BadRequestException("Bạn không thể theo dõi chính mình");
    }
    const existing = await this.communityRepo.findUserFollow(actorUserId, targetUserId);
    if (existing) {
      return new FollowResponseDto({ userId: targetUserId, isFollowing: true });
    }
    await this.communityRepo.createUserFollow(actorUserId, targetUserId);
    return new FollowResponseDto({ userId: targetUserId, isFollowing: true });
  }

  /**
   * Unfollow user theo userId.
   */
  async unfollowUser(actorUserId: string, targetUserId: string): Promise<UnfollowResponseDto> {
    if (actorUserId === targetUserId) {
      throw new BadRequestException("Bạn không thể bỏ theo dõi chính mình");
    }
    const existing = await this.communityRepo.findUserFollow(actorUserId, targetUserId);
    if (existing) {
      await this.communityRepo.deleteUserFollow(existing.id);
    }
    return new UnfollowResponseDto({ userId: targetUserId, isFollowing: false });
  }
  async listFollowers(userId: string, page: number, pageSize: number): Promise<ListFollowersResponseDto> {
    const followers = await this.communityRepo.listFollowers(userId, page, pageSize);
    return new ListFollowersResponseDto(followers);
  }
  async listFollowing(userId: string, page: number, pageSize: number): Promise<ListFollowersResponseDto> {
    const following = await this.communityRepo.listFollowing(userId, page, pageSize);
    return new ListFollowersResponseDto(following);
  }
  async checkFollow(actorUserId: string, targetUserId: string): Promise<CheckFollowResponseDto> {
   if (actorUserId === targetUserId) {
    return new CheckFollowResponseDto({ type: 'ME' });
   }
   const existing = await this.communityRepo.findUserFollow(actorUserId, targetUserId);
   if (existing) {
    return new CheckFollowResponseDto({ type: 'FOLLOW' });
   }
   return new CheckFollowResponseDto({ type: 'UNFOLLOW' })
    }
}
