import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { CommunityService } from "./community.service";
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
  CreateCommentDto,
  UpdateCommentDto,
  CommentResponseDto,
  GetCommentsResponseDto,
  DeleteCommentResponseDto,
} from "./community.dto";
import { Auth } from "src/shared/decorator/auth.decorator";
import { AuthenticationGuard } from "src/shared/guards/authentication.guard";
import { ActiveUser } from "src/shared/decorator/active-user.decorator";
import { TokenPayload } from "src/types/token.type";

@Controller("community")
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post("posts")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)

  async createPost(
    @ActiveUser() user: TokenPayload,
    @Body() body: CreatePostDto,
  ): Promise<{ data: PostResponseDto }> {
    const post = await this.communityService.createPost(user.userId, body);
    return { data: post };
  }
  @Get("feed")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async getFeed(
    @ActiveUser() user: TokenPayload,
    @Query() query: GetFeedQueryDto,
  ): Promise<{ data: GetPostResponseDto }> {
    const feed = await this.communityService.getFeed(user.userId, query);
    return { data: feed };
  }
  @Put("posts/:id")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async updatePost(
    @ActiveUser() user: TokenPayload,
    @Param("id") id: string,
    @Body() body: UpdatePostDto,
  ): Promise<{ data: UpdatePostResponseDto }> {
    const result = await this.communityService.updatePost(user.userId, id, body);
    return { data: result };
  }

  @Delete("posts/:id")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async deletePost(
    @ActiveUser() user: TokenPayload,
    @Param("id") id: string,
  ): Promise<{ data: DeletePostResponseDto }> {
    const result = await this.communityService.deletePost(user.userId, id);
    return { data: result };
  }

  @Put("posts/:id/react")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async reactToPost(
    @ActiveUser() user: TokenPayload,
    @Param("id") id: string,
  ): Promise<{ data: ReactPostResponseDto }> {
    const result = await this.communityService.reactToPost(user.userId, id);
    return { data: result };
  }
  @Get("/users/:id/check-follow")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async checkFollow(
    @ActiveUser() user: TokenPayload,
    @Param("id") targetUserId: string,
  ): Promise<{ data: CheckFollowResponseDto }> {
    const result = await this.communityService.checkFollow(user.userId, targetUserId);
    return { data: result };
  }
  /** Follow user theo userId (id trong URL là userId của user cần follow). */
  @Put("users/:id/follow")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async followUser(
    @ActiveUser() user: TokenPayload,
    @Param("id") targetUserId: string,
  ): Promise<{ data: FollowResponseDto }> {
    const result = await this.communityService.followUser(user.userId, targetUserId);
    return { data: result };
  }

  /** Unfollow user theo userId. */
  @Put("users/:id/unfollow")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async unfollowUser(
    @ActiveUser() user: TokenPayload,
    @Param("id") targetUserId: string,
  ): Promise<{ data: UnfollowResponseDto }> {
    const result = await this.communityService.unfollowUser(user.userId, targetUserId);
    return { data: result };
  }
  @Get("list-followers")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async listFollowers(
    @ActiveUser() user: TokenPayload,
    @Query("page") pageQuery: string,
    @Query("pageSize") pageSizeQuery: string,
  ): Promise<{ data: ListFollowersResponseDto }> {
    const page = parseInt(pageQuery.toString());
    const pageSize = parseInt(pageSizeQuery.toString());
    const result = await this.communityService.listFollowers(user.userId, page, pageSize);
    return { data: result };
  }

  @Get("list-following")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async listFollowing(
    @ActiveUser() user: TokenPayload,
    @Query("page") pageQuery: string,
    @Query("pageSize") pageSizeQuery: string,
  ): Promise<{ data: ListFollowersResponseDto }> {
    const page = parseInt(pageQuery.toString());
    const pageSize = parseInt(pageSizeQuery.toString());
    const result = await this.communityService.listFollowing(user.userId, page, pageSize);
    return { data: result };
  }

  // --- Comments ---

  @Post("posts/:postId/comments")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async createComment(
    @ActiveUser() user: TokenPayload,
    @Param("postId") postId: string,
    @Body() body: CreateCommentDto,
  ): Promise<{ data: CommentResponseDto }> {
    const result = await this.communityService.createComment(user.userId, postId, body);
    return { data: result };
  }

  @Get("posts/:postId/comments")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async getComments(
    @ActiveUser() user: TokenPayload,
    @Param("postId") postId: string,
    @Query("page") page: number,
    @Query("pageSize") pageSize: number,
  ): Promise<{ data: GetCommentsResponseDto }> {
    const result = await this.communityService.getComments(
      user.userId,
      postId,
      page ? Number(page) : 1,
      pageSize ? Number(pageSize) : 20,
    );
    return { data: result };
  }

  @Put("comments/:id")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async updateComment(
    @ActiveUser() user: TokenPayload,
    @Param("id") id: string,
    @Body() body: UpdateCommentDto,
  ): Promise<{ data: CommentResponseDto }> {
    const result = await this.communityService.updateComment(user.userId, id, body);
    return { data: result };
  }

  @Delete("comments/:id")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async deleteComment(
    @ActiveUser() user: TokenPayload,
    @Param("id") id: string,
  ): Promise<{ data: DeleteCommentResponseDto }> {
    const result = await this.communityService.deleteComment(user.userId, id);
    return { data: result };
  }
}

