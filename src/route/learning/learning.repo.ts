import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/service/prisma.service';

@Injectable()
export class LearningRepo {
  constructor(private readonly prisma: PrismaService) {}

  async getVocabulariesByStudySet(studySetId: string) {
    const vocabularies = await this.prisma.vocabulary.findMany({ where: { studySetId } });
    console.log("vocabularies", vocabularies);
    return vocabularies;
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

  // Get vocabulary by ID
  getVocabularyById(vocabularyId: string) {
    return this.prisma.vocabulary.findUnique({
      where: { id: vocabularyId }
    });
  }

  // Study Set Stats
  async getStudySetStats(studySetId: string, userId: string) {
    const now = new Date();
    
    // Get total vocabulary count
    const total = await this.prisma.vocabulary.count({
      where: { studySetId }
    });
    
    // Get progress counts by status
    const learned = await this.prisma.userVocabularyProgress.count({
      where: {
        userId,
        vocabulary: { studySetId },
        status: 'learned'
      }
    });

    const mastered = await this.prisma.userVocabularyProgress.count({
      where: {
        userId,
        vocabulary: { studySetId },
        status: 'mastered'
      }
    });

    // Get count of words needing review
    const needReview = await this.prisma.userVocabularyProgress.count({
      where: {
        userId,
        vocabulary: { studySetId },
        nextReviewAt: { lte: now }
      }
    });
    const allReview = await this.prisma.userVocabularyProgress.count({
      where: {
        userId,
        vocabulary: { studySetId },
    
      }
    });
    const detail = await this.prisma.userVocabularyProgress.findMany({
      where: {
        userId,
        vocabulary: { studySetId },
      
      }
    });
    console.log("detail", detail);
    return {
      total,
      learned,
      needReview,
      mastered,
      allReview
    };
  }
}
