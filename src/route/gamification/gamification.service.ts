import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/service/prisma.service';

// XP Constants
const XP_SOURCES = {
  NEW_WORD_LEARNED: 10,
  WORD_REVIEWED: 1,
  STREAK_BONUS: 5,
  DAILY_GOAL_COMPLETED: 50,
  MASTERED_WORD: 25,
} as const;

// Level progression with increasing requirements
const LEVEL_XP_REQUIREMENTS = {
  1: 0,
  2: 100,
  3: 250,   // 2.5x increase
  4: 500,   // 2x increase
  5: 1000,  // 2x increase
  6: 2000,  // 2x increase
  7: 4000,  // 2x increase
  8: 8000,  // 2x increase
  9: 16000, // 2x increase
  10: 32000, // 2x increase
} as const;

@Injectable()
export class GamificationService {
  constructor(private readonly prisma: PrismaService) {}

  // Calculate level based on XP
  calculateLevel(xp: number): number {
    for (let level = 10; level >= 1; level--) {
      if (xp >= LEVEL_XP_REQUIREMENTS[level as keyof typeof LEVEL_XP_REQUIREMENTS]) {
        return level;
      }
    }
    return 1;
  }

  // Calculate XP needed for next level
  calculateXPForNextLevel(currentLevel: number): number {
    const nextLevel = currentLevel + 1;
    if (nextLevel > 10) return 0; // Max level reached
    
    return LEVEL_XP_REQUIREMENTS[nextLevel as keyof typeof LEVEL_XP_REQUIREMENTS];
  }

  // Calculate XP progress to next level
  calculateXPProgress(currentXP: number, currentLevel: number): number {
    const xpForCurrentLevel = LEVEL_XP_REQUIREMENTS[currentLevel as keyof typeof LEVEL_XP_REQUIREMENTS];
    const xpForNextLevel = this.calculateXPForNextLevel(currentLevel);
    
    if (xpForNextLevel === 0) return 100; // Max level
    
    const xpInCurrentLevel = currentXP - xpForCurrentLevel;
    const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;
    
    return Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNextLevel) * 100));
  }

  // Check if word is unique (not learned before)
  async isWordUnique(userId: string, word: string): Promise<boolean> {
    const existingWord = await this.prisma.userUniqueWord.findUnique({
      where: {
        userId_word: {
          userId,
          word: word.toLowerCase(),
        },
      },
    });
    return !existingWord;
  }

  // Add unique word to user's learned words
  async addUniqueWord(userId: string, word: string): Promise<void> {
    await this.prisma.userUniqueWord.create({
      data: {
        userId,
        word: word.toLowerCase(),
      },
    });
  }

  // Award XP for learning new word
  async awardXPForNewWord(userId: string, word: string, studySetId: string): Promise<number> {
    const isUnique = await this.isWordUnique(userId, word);
    
    if (!isUnique) {
      return 0; // Word already learned
    }

    // Add to unique words
    await this.addUniqueWord(userId, word);

    // Award XP
    const xpAmount = XP_SOURCES.NEW_WORD_LEARNED;
    await this.awardXP(userId, 'new_word_learned', xpAmount, {
      word,
      studySetId,
    });

    // Update daily activity
    await this.updateDailyActivity(userId, 'learn', xpAmount);

    return xpAmount;
  }

  // Award XP for reviewing word
  async awardXPForReview(userId: string, word: string, studySetId: string): Promise<number> {
    const xpAmount = XP_SOURCES.WORD_REVIEWED;
    await this.awardXP(userId, 'word_reviewed', xpAmount, {
      word,
      studySetId,
    });

    // Update daily activity
    await this.updateDailyActivity(userId, 'review', xpAmount);
    console.log("xpAmount", xpAmount);
    return xpAmount;
  }

  // Award XP for mastering word
  async awardXPForMasteredWord(userId: string, word: string, studySetId: string): Promise<number> {
    const xpAmount = XP_SOURCES.MASTERED_WORD;
    await this.awardXP(userId, 'mastered_word', xpAmount, {
      word,
      studySetId,
    });

    // Update daily activity (mastered is also a review activity)
    await this.updateDailyActivity(userId, 'review', xpAmount);

    return xpAmount;
  }

  // Award XP for completing daily goal
  async awardXPForDailyGoal(userId: string): Promise<number> {
    const xpAmount = XP_SOURCES.DAILY_GOAL_COMPLETED;
    await this.awardXP(userId, 'daily_goal_completed', xpAmount, {
      goal: 'daily_goal',
    });

    return xpAmount;
  }

  // Check and award daily goal completion
  async checkAndAwardDailyGoal(userId: string): Promise<number> {
    const todayStats = await this.getDailyActivityStats(userId);
    
    if (todayStats.isGoalCompleted && todayStats.totalActivity === todayStats.dailyGoal) {
      // Only award if this is the exact moment goal is completed
      return await this.awardXPForDailyGoal(userId);
    }
    
    return 0;
  }

  // Award XP for streak bonus
  async awardXPForStreak(userId: string, streak: number): Promise<number> {
    const xpAmount = XP_SOURCES.STREAK_BONUS * streak;
    await this.awardXP(userId, 'streak_bonus', xpAmount, {
      streak,
    });

    return xpAmount;
  }

  // Core XP awarding function
  async awardXP(userId: string, eventType: string, xpAmount: number, metadata?: any): Promise<void> {
    // Create XP event
    await this.prisma.xPEvent.create({
      data: {
        userId,
        eventType,
        xpAmount,
        metadata,
      },
    });

    // Update user XP and level
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { xp: true, level: true },
    });

    if (!user) return;

    const newXP = user.xp + xpAmount;
    const newLevel = this.calculateLevel(newXP);

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        xp: newXP,
        level: newLevel,
      },
    });
  }

  // Calculate and update streak
  async updateStreak(userId: string): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get or create today's activity
    let todayActivity = await this.prisma.dailyActivity.findUnique({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
    });

    if (!todayActivity) {
      todayActivity = await this.prisma.dailyActivity.create({
        data: {
          userId,
          date: today,
          wordsLearned: 0,
          wordsReviewed: 0,
          xpEarned: 0,
          streakCount: 0,
        },
      });
    }

    // Check if user has activity today (words learned or reviewed)
    const hasActivityToday = todayActivity.wordsLearned > 0 || todayActivity.wordsReviewed >= 10;

    if (!hasActivityToday) {
      return todayActivity.streakCount; // No activity today, return current streak
    }

    // Get yesterday's activity
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayActivity = await this.prisma.dailyActivity.findUnique({
      where: {
        userId_date: {
          userId,
          date: yesterday,
        },
      },
    });

    let newStreak = 1; // Start with 1 for today

    if (yesterdayActivity && yesterdayActivity.streakCount > 0) {
      // Check if yesterday had activity
      const hadActivityYesterday = yesterdayActivity.wordsLearned > 0 || yesterdayActivity.wordsReviewed >= 10;
      
      if (hadActivityYesterday) {
        newStreak = yesterdayActivity.streakCount + 1;
      }
    }
   
    // Update today's activity with new streak
    await this.prisma.dailyActivity.update({
      where: { id: todayActivity.id },
      data: { streakCount: newStreak },
    });

    // Update user's streak
    await this.prisma.user.update({
      where: { id: userId },
      data: { streak: newStreak },
    });

    return newStreak;
  }

  // Get user's gamification stats
  async getUserGamificationStats(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        xp: true,
        level: true,
        streak: true,
        totalWordsLearned: true,
        dailyGoal: true,
      },
    });

    if (!user) return null;

    const xpForNextLevel = this.calculateXPForNextLevel(user.level);
    const xpProgress = this.calculateXPProgress(user.xp, user.level);

    return {
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      totalWordsLearned: user.totalWordsLearned,
      dailyGoal: user.dailyGoal,
      xpForNextLevel,
      xpProgress,
      isMaxLevel: user.level >= 10,
    };
  }

  // Get user's daily activity
  async getDailyActivity(userId: string, date: Date = new Date()) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const activity = await this.prisma.dailyActivity.findUnique({
      where: {
        userId_date: {
          userId,
          date: startOfDay,
        },
      },
    });
    
    return activity || {
      wordsLearned: 0,
      wordsReviewed: 0,
      xpEarned: 0,
      streakCount: 0,
    };
  }

  // Get user's daily activity with enhanced stats
  async getDailyActivityStats(userId: string, date: Date = new Date()) {
    const activity = await this.getDailyActivity(userId, date);
    
    // Calculate daily goal progress
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { dailyGoal: true }
    });
    
    const dailyGoal = user?.dailyGoal || 20;
    const totalActivity = activity.wordsLearned + activity.wordsReviewed;
    const goalProgress = Math.min(100, Math.round((totalActivity / dailyGoal) * 100));
    
    return {
      ...activity,
      dailyGoal,
      totalActivity,
      goalProgress,
      isGoalCompleted: totalActivity >= dailyGoal,
    };
  }

  // Get user's XP history
  async getXPEvents(userId: string, limit: number = 50) {
    try {
      return await this.prisma.xPEvent.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: limit,
      });
    } catch (error) {
      console.error('Error fetching XP events from database:', error);
      // Return empty array on error
      return [];
    }
  }

  // Update daily activity when user learns or reviews words
  async updateDailyActivity(userId: string, type: 'learn' | 'review', xpEarned: number = 0) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Get or create today's activity
    let todayActivity = await this.prisma.dailyActivity.findUnique({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
    });
    
    if (!todayActivity) {
      todayActivity = await this.prisma.dailyActivity.create({
        data: {
          userId,
          date: today,
          wordsLearned: 0,
          wordsReviewed: 0,
          xpEarned: 0,
          streakCount: 0,
        },
      });
    }
    
    // Update based on type
    const updateData: any = {};
    
    if (type === 'learn') {
      updateData.wordsLearned = todayActivity.wordsLearned + 1;
    } else if (type === 'review') {
      updateData.wordsReviewed = todayActivity.wordsReviewed + 1;
    }
    
    if (xpEarned > 0) {
      updateData.xpEarned = todayActivity.xpEarned + xpEarned;
    }
    
    // Update daily activity
    await this.prisma.dailyActivity.update({
      where: { id: todayActivity.id },
      data: updateData,
    });
    
    // Update total words learned in user profile
    if (type === 'learn') {
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          totalWordsLearned: {
            increment: 1
          }
        }
      });
    }
    
    // Check for daily goal completion
    await this.checkAndAwardDailyGoal(userId);
    
    return todayActivity;
  }
} 