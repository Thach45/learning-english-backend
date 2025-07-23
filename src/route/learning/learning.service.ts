import { Injectable, NotFoundException } from '@nestjs/common';
import { ReviewVocabularyDto, UserProgressDto } from './learning.dto';
import { LearningRepo } from './learning.repo';
import { StudySetStatsDto } from './learning.dto';

function calculateSR(progress, result: string) {
  let { interval, easeFactor, reviewCount, correctCount } = progress;
  reviewCount += 1;

  if (result === 'easy') {
    correctCount += 1;
    easeFactor = Math.max(1.3, easeFactor + 0.15);
    interval = Math.round(interval * easeFactor * 1.5);
  } else if (result === 'good') {
    correctCount += 1;
    easeFactor = Math.max(1.3, easeFactor + 0.05);
    interval = Math.round(interval * easeFactor);
  } else if (result === 'hard') {
    easeFactor = Math.max(1.3, easeFactor - 0.25);
    interval = 1;
    correctCount = 0; // reset chuỗi đúng liên tiếp
  } else {
    // fallback cho các giá trị khác (nếu có)
    interval = 1;
  }

  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + interval);

  // Logic chuyển trạng thái
  let status = progress.status;
  if (status === 'review' && correctCount >= 3 && interval >= 7) {
    status = 'learned';
  }
  if (status === 'learned' && correctCount >= 5 && interval >= 30) {
    status = 'mastered';
  }
  if (result === 'hard') {
    status = 'review';
  }

  return { interval, easeFactor, reviewCount, nextReviewAt, status, correctCount };
}

@Injectable()
export class LearningService {
  constructor(private readonly repo: LearningRepo) {}

  async getReviewVocabulary(userId: string, limit?: number, status?: string) {
    const now = new Date();
    const progressList = await this.repo.getReviewVocabulary(userId, now, limit ? Number(limit) : 20, status);
    return progressList.map((progress) => ({
      vocabularyId: progress.vocabularyId,
      word: progress.vocabulary.word,
      meaning: progress.vocabulary.meaning,
      definition: progress.vocabulary.definition ?? undefined,
      pronunciation: progress.vocabulary.pronunciation ?? undefined,
      example: progress.vocabulary.example ?? undefined,
      imageUrl: progress.vocabulary.imageUrl ?? undefined,
      audioUrl: progress.vocabulary.audioUrl ?? undefined,
      status: progress.status,
      nextReviewAt: progress.nextReviewAt?.toISOString(),
      reviewCount: progress.reviewCount,
      correctCount: progress.correctCount,
      incorrectCount: progress.incorrectCount,
      easeFactor: progress.easeFactor,
      interval: progress.interval,
    }));
  }

  async updateVocabularyProgress(userId: string, vocabId: string, result: string) {
    let progress = await this.repo.getProgressList(userId, [vocabId]);
    let updated;
    if (!progress || progress.length === 0) {
      // Tạo mới progress
      const base = {
        userId,
        vocabularyId: vocabId,
        status: 'review',
        lastReviewedAt: new Date(),
        nextReviewAt: undefined,
        reviewCount: 0,
        correctCount: 0,
        incorrectCount: 0,
        easeFactor: 2.5,
        interval: 1,
      };
      const sr = calculateSR(base, result);
      updated = await this.repo.createProgress({
        ...base,
        ...sr,
        nextReviewAt: sr.nextReviewAt,
        correctCount: sr.correctCount,
        incorrectCount: result === 'incorrect' ? 1 : 0,
        status: sr.status,
      });
    } else {
      // Update progress
      const p = progress[0];
      const sr = calculateSR(p, result);
      updated = await this.repo.updateProgress(p.id, {
        lastReviewedAt: new Date(),
        nextReviewAt: sr.nextReviewAt,
        interval: sr.interval,
        easeFactor: sr.easeFactor,
        reviewCount: sr.reviewCount,
        correctCount: sr.correctCount,
        incorrectCount: p.incorrectCount + (result === 'incorrect' ? 1 : 0),
        status: sr.status,
      });
    }
    return {
      message: 'Progress updated',
      ok: true,
    };
  }

  async getUserProgress(userId: string): Promise<UserProgressDto> {
    const [total, learned, review, mastered, sum] = await Promise.all([
      this.repo.countAllProgress(userId),
      this.repo.countByStatus(userId, 'learned'),
      this.repo.countByStatus(userId, 'review'),
      this.repo.countByStatus(userId, 'mastered'),
      this.repo.sumCorrectIncorrect(userId),
    ]);
    const correct = sum._sum.correctCount || 0;
    const incorrect = sum._sum.incorrectCount || 0;
    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
    return {
      total,
      learned,
      review,
      mastered,
      accuracy,
    };
  }

  async getStudySetVocabulary(studySetId: string, userId: string, mode?: string): Promise<ReviewVocabularyDto[]> {
    const vocabularies = await this.repo.getVocabulariesByStudySet(studySetId);
    if(mode === 'review') {
      return vocabularies.map(vocab => ({
        vocabularyId: vocab.id,
        word: vocab.word,
        meaning: vocab.meaning,
        definition: vocab.definition ?? undefined,
        pronunciation: vocab.pronunciation ?? undefined,
        example: vocab.example ?? undefined,
        imageUrl: vocab.imageUrl ?? undefined,
        audioUrl: vocab.audioUrl ?? undefined,
        status: 'review',
        nextReviewAt: undefined,
        reviewCount: 0,
        correctCount: 0,
        incorrectCount: 0,
        easeFactor: 2.5,
        interval: 1,
      }));
    }
    else {
    const progressList = await this.repo.getProgressList(userId, vocabularies.map(v => v.id));
    const progressMap = new Map(progressList.map(p => [p.vocabularyId, p]));
    if (progressList.length < vocabularies.length) {
      return vocabularies.map(vocab => {
        const progress = progressMap.get(vocab.id);
        return {
          vocabularyId: vocab.id,
          word: vocab.word,
          meaning: vocab.meaning,
          definition: vocab.definition ?? undefined,
          pronunciation: vocab.pronunciation ?? undefined,
          example: vocab.example ?? undefined,
          imageUrl: vocab.imageUrl ?? undefined,
          audioUrl: vocab.audioUrl ?? undefined,
          status: progress ? progress.status : 'new',
          nextReviewAt: progress?.nextReviewAt?.toISOString(),
          reviewCount: progress?.reviewCount ?? 0,
          correctCount: progress?.correctCount ?? 0,
          incorrectCount: progress?.incorrectCount ?? 0,
          easeFactor: progress?.easeFactor ?? 2.5,
          interval: progress?.interval ?? 1,
        };
      });
    } else {
      const now = new Date();
      const reviewList = await this.repo.getReviewProgressList(userId, vocabularies.map(v => v.id), now);
      
      return reviewList.map(progress => ({
        vocabularyId: progress.vocabularyId,
        word: progress.vocabulary.word,
        meaning: progress.vocabulary.meaning,
        definition: progress.vocabulary.definition ?? undefined,
        pronunciation: progress.vocabulary.pronunciation ?? undefined,
        example: progress.vocabulary.example ?? undefined,
        imageUrl: progress.vocabulary.imageUrl ?? undefined,
        audioUrl: progress.vocabulary.audioUrl ?? undefined,
        status: progress.status,
        nextReviewAt: progress.nextReviewAt?.toISOString(),
        reviewCount: progress.reviewCount,
        correctCount: progress.correctCount,
        incorrectCount: progress.incorrectCount,
        easeFactor: progress.easeFactor,
        interval: progress.interval,
      }));
      }
    }
    
  }
  async getStudySetStats(studySetId: string, userId: string): Promise<StudySetStatsDto> {
    return this.repo.getStudySetStats(studySetId, userId);
  }
} 