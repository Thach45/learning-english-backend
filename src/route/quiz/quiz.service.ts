import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';
import { GenerateQuizDto, QuizQuestionDto } from './quiz.dto';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

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
            mode: 'multiple_choice',
          };
        }),
      );

      return questions;
    }

    if (dto.mode === 'fill_in_the_blank') {
      const shuffled = [...vocabularies].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, dto.questionCount || 10);

      const questions: QuizQuestionDto[] = selected.map((vocab, index) => {
        const { question, blankType, correctAnswer } =
          this.buildFillBlankQuestion(vocab);

        return {
          id: `quiz-fib-${vocab.id}-${index}-${Date.now()}`,
          vocabularyId: vocab.id,
          question,
          options: [],
          correctAnswer,
          word: vocab.word,
          pronunciation: vocab.pronunciation || undefined,
          definition: vocab.definition || undefined,
          example: vocab.example || undefined,
          mode: 'fill_in_the_blank',
          fillBlankType: blankType,
        };
      });

      return questions;
    }

    throw new BadRequestException('Invalid quiz mode');
  }

  /**
   * Luôn: cho nghĩa tiếng Việt, học viên điền từ tiếng Anh tương ứng.
   */
  private buildFillBlankQuestion(vocab: { word: string; meaning: string }): {
    question: string;
    blankType: 'word';
    correctAnswer: string;
  } {
    const meaning = vocab.meaning.trim();
    return {
      question: `Nghĩa tiếng Việt:\n"${meaning}"\n\nĐiền từ tiếng Anh tương ứng.`,
      blankType: 'word',
      correctAnswer: vocab.word.trim(),
    };
  }
}
