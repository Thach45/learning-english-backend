import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/service/prisma.service';

@Injectable()
export class LearningRepo {
  constructor(private readonly prisma: PrismaService) {}

  getVocabulariesByStudySet(studySetId: string) {
    return this.prisma.vocabulary.findMany({ where: { studySetId } });
  }

  getProgressList(userId: string, vocabularyIds: string[]) {
    return this.prisma.userVocabularyProgress.findMany({
      where: { userId, vocabularyId: { in: vocabularyIds } },
    });
  }

  getReviewProgressList(userId: string, vocabularyIds: string[], now: Date) {
    return this.prisma.userVocabularyProgress.findMany({
      where: {
        userId,
        vocabularyId: { in: vocabularyIds },
        nextReviewAt: { lte: now },
      },
      include: { vocabulary: true },
    });
  }

  getReviewVocabulary(userId: string, now: Date, limit: number, status?: string) {
    const where: any = {
      userId,
      nextReviewAt: { lte: now },
    };
    if (status) where.status = status;
    return this.prisma.userVocabularyProgress.findMany({
      where,
      orderBy: { nextReviewAt: 'asc' },
      take: limit,
      include: { vocabulary: true },
    });
  }

  createProgress(data: any) {
    return this.prisma.userVocabularyProgress.create({ data });
  }

  updateProgress(id: string, data: any) {
    return this.prisma.userVocabularyProgress.update({ where: { id }, data });
  }

  // Progress tổng thể
  countAllProgress(userId: string) {
    return this.prisma.userVocabularyProgress.count({ where: { userId } });
  }
  countByStatus(userId: string, status: string) {
    return this.prisma.userVocabularyProgress.count({ where: { userId, status } });
  }
  sumCorrectIncorrect(userId: string) {
    return this.prisma.userVocabularyProgress.aggregate({
      where: { userId },
      _sum: { correctCount: true, incorrectCount: true },
    });
  }
}
