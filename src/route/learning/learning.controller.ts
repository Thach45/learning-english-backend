import { Controller, Get, Patch, Param, Body, Query, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { LearningService } from './learning.service';

import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { TokenPayload } from 'src/types/token.type';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { UseGuards } from '@nestjs/common';
import { ReviewVocabularyListResponseDto, UpdateVocabularyProgressResponseDto, UserProgressResponseDto } from './learning.dto';

@Auth(['access-token'], "or")
@UseGuards(AuthenticationGuard) 
@UseInterceptors(ClassSerializerInterceptor)
@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  // GET /learning/users/:userId/review-vocabulary
  @Get('users/review-vocabulary')
  getReviewVocabulary(
    @ActiveUser() user: TokenPayload,
    @Query('limit') limit?: number,
    @Query('status') status?: string
  ) {
    return this.learningService.getReviewVocabulary(user.userId, limit, status);
  }

  // PATCH /learning/vocabulary/:vocabId/progress
  @Patch('vocabulary/:vocabId/progress')
  async updateVocabularyProgress(
    @ActiveUser() user: TokenPayload,
    @Param('vocabId') vocabId: string,
    @Body('result') result: string
  ) {
    const data = await this.learningService.updateVocabularyProgress(user.userId, vocabId, result);
    console.log(data);
    return new UpdateVocabularyProgressResponseDto(data);
  }

  // GET /learning/users/progress
  @Get('users/progress')
  async getUserProgress(@ActiveUser() user: TokenPayload) {
    return new UserProgressResponseDto(await this.learningService.getUserProgress(user.userId));
  }

  // GET /learning/study-sets/:studySetId/vocabulary
  @Get('study-sets/:studySetId/vocabulary')
  async getStudySetVocabulary(
    @Param('studySetId') studySetId: string,
    @ActiveUser() user: TokenPayload
  ) {
    return new ReviewVocabularyListResponseDto(await this.learningService.getStudySetVocabulary(studySetId, user.userId));
  }
} 