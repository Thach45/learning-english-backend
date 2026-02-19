import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AchievementRepository } from './achievement.repo';
import { CreateAchievementDto, UpdateAchievementDto, GetAchievementsQueryDto, GetAchievementsResponseDto, AchievementResponseDto } from './achievement.dto';
import { Achievement, AchievementType } from 'generated/prisma';
import { GamificationService } from '../gamification/gamification.service';

@Injectable()
export class AchievementService {
  constructor(
    private readonly achievementRepo: AchievementRepository,
    @Inject(forwardRef(() => GamificationService))
    private gamificationService: GamificationService,
  ) {}

  async createAchievement(dto: CreateAchievementDto): Promise<Achievement> {
    return this.achievementRepo.create({
      title: dto.title,
      description: dto.description,
      type: dto.type,
      targetValue: dto.targetValue,
      duration: dto.duration,
      rarity: dto.rarity,
      icon: dto.icon,
      xpReward: dto.xpReward,
    });
  }

  async updateAchievement(id: string, dto: UpdateAchievementDto): Promise<Achievement> {
    const achievement = await this.achievementRepo.findById(id);
    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }
    return this.achievementRepo.update(id, {
      title: dto.title,
      description: dto.description,
      targetValue: dto.targetValue,
      duration: dto.duration,
      rarity: dto.rarity,
      icon: dto.icon,
      isActive: dto.isActive,
      xpReward: dto.xpReward,
    });
  }

  async deleteAchievement(id: string): Promise<Achievement> {
    const achievement = await this.achievementRepo.findById(id);
    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }
    return this.achievementRepo.setActive(id, false);
  }

  async getAchievement(id: string): Promise<Achievement | null> {
    return this.achievementRepo.findById(id);
  }

  async getAchievements(query: GetAchievementsQueryDto): Promise<GetAchievementsResponseDto> {
    const page = query.page && query.page > 0 ? query.page : 1;
    const pageSize = query.pageSize && query.pageSize > 0 ? Math.min(query.pageSize, 100) : 20;

    const { items, total } = await this.achievementRepo.getAchievementsPaginated({
      page,
      pageSize,
      type: query.type,
      rarity: query.rarity,
      isActive: query.isActive,
    });

    return new GetAchievementsResponseDto({
      items: items.map((a) => new AchievementResponseDto({
        ...a,
        duration: a.duration ?? undefined,
        icon: a.icon ?? undefined,
      })),
      pagination: { page, pageSize, total },
    });
  }

  async checkAndUpdateAchievements(userId: string): Promise<void> {
    const user = await this.achievementRepo.findUserStats(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const activeAchievements = await this.achievementRepo.findManyActive();

    for (const achievement of activeAchievements) {
      await this.checkAndUpdateSingleAchievement(userId, user, achievement);
    }
  }

  private async checkAndUpdateSingleAchievement(
    userId: string,
    user: { totalWordsLearned: number; streak: number; level: number; totalWordsReviewed: number },
    achievement: Achievement,
  ): Promise<void> {
    let currentProgress = 0;

    switch (achievement.type) {
      case AchievementType.TOTAL_WORDS_LEARNED:
        currentProgress = user.totalWordsLearned;
        break;
      case AchievementType.STREAK_DAYS:
        currentProgress = user.streak;
        break;
      case AchievementType.LEVEL_REACHED:
        currentProgress = user.level;
        break;
      case AchievementType.TOTAL_WORDS_REVIEWED:
        currentProgress = user.totalWordsReviewed;
        break;
    }

    const userAchievement = await this.achievementRepo.findUserAchievement(userId, achievement.id);

    if (!userAchievement) {
      await this.achievementRepo.createUserAchievement({
        userId,
        achievementId: achievement.id,
        progress: currentProgress,
        isCompleted: currentProgress >= achievement.targetValue,
        completedAt: currentProgress >= achievement.targetValue ? new Date() : null,
      });
      return;
    }

    if (userAchievement.isCompleted) return;

    const isNowCompleted = currentProgress >= achievement.targetValue;
    let canComplete = isNowCompleted;

    if (achievement.duration && isNowCompleted) {
      const achievementAge = Math.floor(
        (Date.now() - userAchievement.createdAt.getTime()) / (1000 * 60 * 60 * 24),
      );
      canComplete = achievementAge <= achievement.duration;
    }

    await this.achievementRepo.updateUserAchievement(userAchievement.id, {
      progress: currentProgress,
      isCompleted: canComplete,
      completedAt: canComplete ? new Date() : null,
    });

    if (canComplete) {
      await this.gamificationService.awardXPForAchievement(userId, achievement.id);
    }
  }

  async getUserAchievements(userId: string) {
    const userExists = await this.achievementRepo.findUserStats(userId);
    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return this.achievementRepo.findUserAchievements(userId);
  }

  async getUserInProgressAchievements(userId: string) {
    const userExists = await this.achievementRepo.findUserStats(userId);
    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return this.achievementRepo.findUserInProgressAchievements(userId);
  }
}
