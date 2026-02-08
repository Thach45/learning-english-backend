import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { ActiveUser } from 'src/shared/decorator/active-user.decorator';
import { TokenPayload } from 'src/types/token.type';
import {
  GenerateQuizDto,
  QuizQuestionDto,
  SubmitQuizDto,
  QuizResultDto,
} from './quiz.dto';

@Controller('quiz')
@UseInterceptors(ClassSerializerInterceptor)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  /**
   * Generate quiz questions from study set
   * GET /quiz/generate?studySetId=xxx&questionCount=10&mode=practice
   */
  @Auth(['access-token'], 'or')
  @UseGuards(AuthenticationGuard)
  @Get('generate')
  async generateQuiz(
    @ActiveUser() user: TokenPayload,
    @Query('studySetId') studySetId: string,
    @Query('questionCount') questionCount?: string,
    @Query('mode') mode?: 'multiple_choice' | 'fill_in_the_blank',
  ): Promise<{ data: QuizQuestionDto[] }> {
    const dto: GenerateQuizDto = {
      studySetId,
      questionCount: questionCount ? parseInt(questionCount, 10) : undefined,
      mode: mode || 'multiple_choice',
    };
    
    const questions = await this.quizService.generateQuiz(
      dto.studySetId,
      user.userId,
      dto,
    );
    return { data: questions };
  }

  /**
   * Submit quiz answers and get results
   * POST /quiz/submit
   */
  @Auth(['access-token'], 'or')
  @UseGuards(AuthenticationGuard)
  @Post('submit')
  async submitQuiz(
    @Body() dto: SubmitQuizDto,
    @ActiveUser() user: TokenPayload,
  ): Promise<{ data: QuizResultDto }> {
    const result = await this.quizService.submitQuiz(
      dto.studySetId,
      user.userId,
      dto,
    );
    return { data: result };
  }
}
