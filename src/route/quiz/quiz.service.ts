import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';
import {
  GenerateQuizDto,
  QuizQuestionDto,
  SubmitQuizDto,
  QuizResultDto,
} from './quiz.dto';
import { GamificationService } from '../gamification/gamification.service';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService, private readonly gamificationService: GamificationService) {}

  /**
   * Generate quiz questions from study set
   */
  async generateQuiz(
    studySetId: string,
    userId: string,
    dto: GenerateQuizDto,
  ): Promise<QuizQuestionDto[]> {
    // 1. Check study set exists
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
    });

    if (!studySet) {
      throw new NotFoundException('Study set not found');
    }

    // 2. Get vocabularies from study set with progress info
    const vocabulariesWithProgress = await this.prisma.vocabulary.findMany({
      where: { studySetId },
      include: {
        vocabularyProgress: {
          where: {
            userId,
          },
        },
      },
    });

    if (vocabulariesWithProgress.length === 0) {
      throw new BadRequestException('Study set has no vocabularies');
    }

    // 3. Filter vocabularies based on progress if needed (optional filter)
    // For now, use all vocabularies, but we have access to progress info
    const vocabularies = vocabulariesWithProgress;

    // 4. Generate questions based on mode
    if (dto.mode === 'multiple_choice' || !dto.mode) {
      // 5. Shuffle and select N vocabularies
      const shuffled = [...vocabularies].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, dto.questionCount || 10);

      // 6. Generate multiple-choice questions
      const questions: QuizQuestionDto[] = await Promise.all(
        selected.map(async (vocab) => {
          // Get wrong answers from other vocabularies
          const otherVocab = vocabularies.filter((v) => v.id !== vocab.id);
          const wrongAnswers = otherVocab
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((v) => v.meaning);

          // Combine correct and wrong answers, then shuffle
          const options = [vocab.meaning, ...wrongAnswers].sort(
            () => Math.random() - 0.5,
          );

          return {
            id: `quiz-${vocab.id}-${Date.now()}`,
            vocabularyId: vocab.id,
            question: `What does "${vocab.word}" mean?`,
            options,
            correctAnswer: vocab.meaning,
            word: vocab.word,
            pronunciation: vocab.pronunciation || undefined,
            definition: vocab.definition || undefined,
            example: vocab.example || undefined,
          };
        }),
      );

      return questions;
    }

    // TODO: Implement fill_in_the_blank mode
    if (dto.mode === 'fill_in_the_blank') {
      throw new BadRequestException('Fill in the blank mode not implemented yet');
    }

    throw new BadRequestException('Invalid quiz mode');
  }

  /**
   * Submit quiz answers and update progress
   */
  async submitQuiz(
    studySetId: string,
    userId: string,
    dto: SubmitQuizDto,
  ): Promise<QuizResultDto> {
    // 1. Validate study set
    const studySet = await this.prisma.studySet.findUnique({
      where: { id: studySetId },
    });

    if (!studySet) {
      throw new NotFoundException('Study set not found');
    }

    // 2. Get vocabularies to validate answers
    const vocabularies = await this.prisma.vocabulary.findMany({
      where: {
        studySetId,
        id: { in: dto.answers.map((a) => a.vocabularyId) },
      },
    });

    if (vocabularies.length !== dto.answers.length) {
      throw new BadRequestException('Some vocabularies not found');
    }

    // 3. Check answers and calculate score
    const details: QuizResultDto['details'] = [];
    let correct = 0;

    for (const answer of dto.answers) {
      const vocab = vocabularies.find((v) => v.id === answer.vocabularyId);
      if (!vocab) continue;

      const isCorrect =
        answer.userAnswer.trim().toLowerCase() ===
        vocab.meaning.trim().toLowerCase();

      if (isCorrect) {
        correct++;
      }

      details.push({
        vocabularyId: vocab.id,
        word: vocab.word,
        isCorrect,
        userAnswer: answer.userAnswer,
        correctAnswer: vocab.meaning,
      });
    }

    const total = dto.answers.length;
    const score = total > 0 ? (correct / total) * 100 : 0;

    // 4. Update UserVocabularyProgress for each vocabulary
    await Promise.all(
      dto.answers.map(async (answer) => {
        const vocab = vocabularies.find((v) => v.id === answer.vocabularyId);
        if (!vocab) return;

        const isCorrect =
          answer.userAnswer.trim().toLowerCase() ===
          vocab.meaning.trim().toLowerCase();

        // Get or create progress
        const existingProgress =
          await this.prisma.userVocabularyProgress.findUnique({
            where: {
              userId_vocabularyId: {
                userId,
                vocabularyId: vocab.id,
              },
            },
          });

        if (existingProgress) {
          // Update existing progress
          await this.prisma.userVocabularyProgress.update({
            where: {
              userId_vocabularyId: {
                userId,
                vocabularyId: vocab.id,
              },
            },
            data: {
              correctCount: { increment: isCorrect ? 1 : 0 },
              incorrectCount: { increment: isCorrect ? 0 : 1 },
              reviewCount: { increment: 1 },
              lastReviewedAt: new Date(),
              status: this.calculateStatus(
                existingProgress.correctCount + (isCorrect ? 1 : 0),
                existingProgress.incorrectCount + (isCorrect ? 0 : 1),
              ),
              nextReviewAt: this.calculateNextReview(isCorrect),
            },
          });
        } else {
          // Create new progress
          await this.prisma.userVocabularyProgress.create({
            data: {
              userId,
              vocabularyId: vocab.id,
              correctCount: isCorrect ? 1 : 0,
              incorrectCount: isCorrect ? 0 : 1,
              reviewCount: 1,
              lastReviewedAt: new Date(),
              status: isCorrect ? 'review' : 'new',
              nextReviewAt: this.calculateNextReview(isCorrect),
            },
          });
        }
      }),
    );

    // 5. Update DailyActivity
    await this.gamificationService.updateDailyActivityFromQuiz(userId, total, correct);

    // 6. Return result
    return {
      score: Math.round(score * 100) / 100, // Round to 2 decimals
      correct,
      total,
      message: this.getScoreMessage(score),
      details,
    };
  }

  /**
   * Calculate next review date based on answer
   */
  private calculateNextReview(isCorrect: boolean): Date {
    const now = new Date();
    if (isCorrect) {
      // If correct, review again in 1 day
      return new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000);
    } else {
      // If incorrect, review again in 12 hours
      return new Date(now.getTime() + 0.5 * 24 * 60 * 60 * 1000);
    }
  }

  /**
   * Calculate status based on correct/incorrect ratio
   */
  private calculateStatus(
    correctCount: number,
    incorrectCount: number,
  ): string {
    const total = correctCount + incorrectCount;
    if (total === 0) return 'new';

    const accuracy = correctCount / total;
    if (accuracy >= 0.8 && total >= 3) return 'mastered';
    if (accuracy >= 0.5 || total >= 2) return 'review';
    return 'new';
  }

 

  /**
   * Get score message
   */
  private getScoreMessage(score: number): string {
    if (score >= 90) return 'Excellent! You mastered this quiz! 🎉';
    if (score >= 70) return 'Great job! Keep practicing! 👍';
    if (score >= 50) return 'Good effort! Review the words you missed. 📚';
    return "Don't give up! Practice makes perfect! 💪";
  }
}
