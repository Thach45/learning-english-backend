import { Controller, Get, Patch, Param, Body, Query, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { LearningService } from './learning.service';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { TokenPayload } from 'src/types/token.type';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { UseGuards } from '@nestjs/common';
import { 
  ReviewVocabularyListResponseDto, 
  UpdateVocabularyProgressResponseDto, 
  UserProgressResponseDto,
  StudySetStatsResponseDto,
  GetVocabularyQueryDto
} from './learning.dto';

@Auth(['access-token'], "or")
@UseGuards(AuthenticationGuard) 
@UseInterceptors(ClassSerializerInterceptor)
@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  // GET /learning/study-sets/:studySetId/vocabulary
  @Get('study-sets/:studySetId/vocabulary')
  async getStudySetVocabulary(
    @Param('studySetId') studySetId: string,
    @Query() query: GetVocabularyQueryDto,
    @ActiveUser() user: TokenPayload
  ) {
    const vocabulary = await this.learningService.getStudySetVocabulary(
      studySetId, 
      user.userId,
      query.mode
    );
    console.log("vocabulary", vocabulary);
    return new ReviewVocabularyListResponseDto(vocabulary);
  }

  // GET /learning/study-sets/:studySetId/stats
  @Get('study-sets/:studySetId/stats')
  async getStudySetStats(
    @Param('studySetId') studySetId: string,
    @ActiveUser() user: TokenPayload
  ) {
    const stats = await this.learningService.getStudySetStats(studySetId, user.userId);
    return new StudySetStatsResponseDto(stats);
  }

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
    @Body('result') result: 'easy' | 'good' | 'hard'
  ) {
    const data = await this.learningService.updateVocabularyProgress(user.userId, vocabId, result);
    return new UpdateVocabularyProgressResponseDto(data);
  }

  // GET /learning/users/progress
  @Get('users/progress')
  async getUserProgress(@ActiveUser() user: TokenPayload) {
    return new UserProgressResponseDto(await this.learningService.getUserProgress(user.userId));
  }
} 