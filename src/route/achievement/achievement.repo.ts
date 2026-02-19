import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';
import { AchievementType, AchievementRarity } from 'generated/prisma';

/**
 * AchievementRepository
 * ---------------------
 * Chỉ truy cập database (Prisma) cho module Achievement.
 * Không chứa business logic. Service gọi repo và xử lý DTO.
 */

export interface GetAchievementsRepoParams {
  page: number;
  pageSize: number;
  type?: AchievementType;
  rarity?: AchievementRarity;
  isActive?: boolean;
}

@Injectable()
export class AchievementRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Danh sách achievement có phân trang và bộ lọc.
   */
  async getAchievementsPaginated(params: GetAchievementsRepoParams) {
    const { page, pageSize, type, rarity, isActive } = params;
    const skip = (page - 1) * pageSize;

    const where = {
      ...(type && { type }),
      ...(rarity && { rarity }),
      ...(typeof isActive === 'boolean' && { isActive }),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.achievement.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.achievement.count({ where }),
    ]);

    return { items, total };
  }

  async findById(id: string) {
    return this.prisma.achievement.findUnique({
      where: { id },
    });
  }

  async create(data: {
    title: string;
    description: string;
    type: AchievementType;
    targetValue: number;
    duration?: number;
    rarity: AchievementRarity;
    icon?: string;
    xpReward?: number;
  }) {
    return this.prisma.achievement.create({
      data: {
        ...data,
        isActive: true,
      },
    });
  }

  async update(
    id: string,
    data: {
      title?: string;
      description?: string;
      targetValue?: number;
      duration?: number;
      rarity?: AchievementRarity;
      icon?: string;
      isActive?: boolean;
      xpReward?: number;
    },
  ) {
    return this.prisma.achievement.update({
      where: { id },
      data,
    });
  }

  async setActive(id: string, isActive: boolean) {
    return this.prisma.achievement.update({
      where: { id },
      data: { isActive },
    });
  }

  /**
   * Lấy tất cả achievement đang active (dùng cho check tiến độ user).
   */
  async findManyActive() {
    return this.prisma.achievement.findMany({
      where: { isActive: true },
    });
  }

  /**
   * Lấy thống kê user cần cho tính achievement (totalWordsLearned, streak, level, totalWordsReviewed).
   */
  async findUserStats(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        totalWordsLearned: true,
        streak: true,
        level: true,
        totalWordsReviewed: true,
      },
    });
  }

  async findUserAchievement(userId: string, achievementId: string) {
    return this.prisma.userAchievement.findUnique({
      where: {
        userId_achievementId: { userId, achievementId },
      },
    });
  }

  async createUserAchievement(data: {
    userId: string;
    achievementId: string;
    progress: number;
    isCompleted: boolean;
    completedAt: Date | null;
  }) {
    return this.prisma.userAchievement.create({
      data,
    });
  }

  async updateUserAchievement(
    id: string,
    data: { progress: number; isCompleted: boolean; completedAt: Date | null },
  ) {
    return this.prisma.userAchievement.update({
      where: { id },
      data,
    });
  }

  async findUserAchievements(userId: string) {
    return this.prisma.userAchievement.findMany({
      where: { userId },
      include: { achievement: true },
      orderBy: [{ isCompleted: 'asc' }, { updatedAt: 'desc' }],
    });
  }

  async findUserInProgressAchievements(userId: string) {
    return this.prisma.userAchievement.findMany({
      where: {
        userId,
        isCompleted: false,
        achievement: { isActive: true },
      },
      include: { achievement: true },
      orderBy: { progress: 'desc' },
    });
  }
}
