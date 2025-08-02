import { Expose, Transform } from 'class-transformer';

export class GamificationStatsResponseDto {
  @Expose()
  xp: number;

  @Expose()
  level: number;

  @Expose()
  streak: number;

  @Expose()
  totalWordsLearned: number;

  @Expose()
  dailyGoal: number;

  @Expose()
  xpForNextLevel: number;

  @Expose()
  xpProgress: number;

  @Expose()
  isMaxLevel: boolean;

  constructor(partial: Partial<GamificationStatsResponseDto>) {
    Object.assign(this, partial);
  }
}

export class DailyActivityResponseDto {
  @Expose()
  wordsLearned: number;

  @Expose()
  wordsReviewed: number;

  @Expose()
  xpEarned: number;

  @Expose()
  streakCount: number;

  @Expose()
  dailyGoal?: number;

  @Expose()
  totalActivity?: number;

  @Expose()
  goalProgress?: number;

  @Expose()
  isGoalCompleted?: boolean;

  @Expose()
  @Transform(({ value }) => value?.toISOString())
  date: Date;

  constructor(partial: Partial<DailyActivityResponseDto>) {
    Object.assign(this, partial);
  }
}

export class XPEventResponseDto {
  @Expose()
  id: string;

  @Expose()
  eventType: string;

  @Expose()
  xpAmount: number;

  @Expose()
  metadata: any;

  @Expose()
  @Transform(({ value }) => value?.toISOString())
  createdAt: Date;

  constructor(partial: Partial<XPEventResponseDto>) {
    Object.assign(this, partial);
  }
}

export class XPEventsResponseDto {
  @Expose()
  events: XPEventResponseDto[];

  @Expose()
  total: number;

  constructor(partial: Partial<XPEventsResponseDto>) {
    Object.assign(this, partial);
  }
}

export class LevelUpResponseDto {
  @Expose()
  oldLevel: number;

  @Expose()
  newLevel: number;

  @Expose()
  xpGained: number;

  @Expose()
  message: string;

  constructor(partial: Partial<LevelUpResponseDto>) {
    Object.assign(this, partial);
  }
} 