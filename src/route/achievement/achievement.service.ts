import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../shared/service/prisma.service';
import { CreateAchievementDto, UpdateAchievementDto, GetAchievementsQueryDto } from './achievement.dto';
import { Achievement, AchievementType, User } from 'generated/prisma';
import { GamificationService } from '../gamification/gamification.service';

@Injectable()
export class AchievementService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => GamificationService))
    private gamificationService: GamificationService,
  ) {}

  // CRUD operations for admin
  async createAchievement(dto: CreateAchievementDto): Promise<Achievement> {
    return this.prisma.achievement.create({
      data: {
        ...dto,
        isActive: true,
      },
    });
  }

  async updateAchievement(id: string, dto: UpdateAchievementDto): Promise<Achievement> {
    const achievement = await this.prisma.achievement.findUnique({ where: { id } });
    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }

    return this.prisma.achievement.update({
      where: { id },
      data: dto,
    });
  }

  async deleteAchievement(id: string): Promise<Achievement> {
    const achievement = await this.prisma.achievement.findUnique({ where: { id } });
    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }

    return this.prisma.achievement.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async getAchievement(id: string): Promise<Achievement | null> {
    return this.prisma.achievement.findUnique({
      where: { id },
    });
  }

  async getAchievements(query: GetAchievementsQueryDto) {
    const where = {
      ...(query.type && { type: query.type }),
      ...(query.rarity && { rarity: query.rarity }),
      ...(typeof query.isActive === 'boolean' && { isActive: query.isActive }),
    };

    return this.prisma.achievement.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Achievement progress checking and updating
  async checkAndUpdateAchievements(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        totalWordsLearned: true,
        streak: true,
        level: true,
        totalWordsReviewed: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const activeAchievements = await this.prisma.achievement.findMany({
      where: { isActive: true },
    });

    for (const achievement of activeAchievements) {
      await this.checkAndUpdateSingleAchievement(userId, user, achievement);
    }
  }

  private async checkAndUpdateSingleAchievement(
    userId: string,
    user: Pick<User, 'totalWordsLearned' | 'streak' | 'level' | 'totalWordsReviewed'>,
    achievement: Achievement,
  ) {
    let currentProgress = 0;

    // Xác định tiến độ dựa trên loại achievement
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

    // Kiểm tra và cập nhật tiến độ
    const userAchievement = await this.prisma.userAchievement.findUnique({
      where: {
        userId_achievementId: {
          userId,
          achievementId: achievement.id,
        },
      },
    });

    if (!userAchievement) {
      // Tạo mới nếu chưa có
      await this.prisma.userAchievement.create({
        data: {
          userId,
          achievementId: achievement.id,
          progress: currentProgress,
          isCompleted: currentProgress >= achievement.targetValue,
          completedAt: currentProgress >= achievement.targetValue ? new Date() : null,
        },
      });
    } else if (!userAchievement.isCompleted) {
      // Cập nhật nếu chưa hoàn thành
      const isNowCompleted = currentProgress >= achievement.targetValue;
      
      // Kiểm tra điều kiện thời gian nếu có
      let canComplete = isNowCompleted;
      if (achievement.duration && isNowCompleted) {
        const achievementAge = Math.floor(
          (Date.now() - userAchievement.createdAt.getTime()) / (1000 * 60 * 60 * 24)
        );
        canComplete = achievementAge <= achievement.duration;
      }

      await this.prisma.userAchievement.update({
        where: { id: userAchievement.id },
        data: {
          progress: currentProgress,
          isCompleted: canComplete,
          completedAt: canComplete ? new Date() : null,
        },
      });

      // Nếu vừa hoàn thành, award XP thông qua GamificationService
      if (canComplete) {
        await this.gamificationService.awardXPForAchievement(userId, achievement.id);
      }
    }
  }

  // Lấy achievements của user
  async getUserAchievements(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.userAchievement.findMany({
      where: { userId },
      include: {
        achievement: true,
      },
      orderBy: [
        { isCompleted: 'asc' },
        { updatedAt: 'desc' },
      ],
    });
  }

  async getUserInProgressAchievements(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.userAchievement.findMany({
      where: {
        userId,
        isCompleted: false,
        achievement: {
          isActive: true,
        },
      },
      include: {
        achievement: true,
      },
      orderBy: {
        progress: 'desc',
      },
    });
  }
}