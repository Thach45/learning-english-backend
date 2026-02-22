import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';

/**
 * UserRepository
 * ---------------
 * Truy cập DB cho module User (thông tin cá nhân user đăng nhập).
 */

const PROFILE_SELECT = {
  id: true,
  email: true,
  name: true,
  avatarUrl: true,
  bio: true,
  website: true,
  location: true,
  level: true,
  xp: true,
  streak: true,
  totalWordsLearned: true,
  dailyGoal: true,
  difficultyPreference: true,
  notificationsEnabled: true,
  publicProfile: true,
  createdAt: true,
  updatedAt: true,
} as const;

export type ProfileData = {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  bio: string | null;
  website: string | null;
  location: string | null;
  level: number;
  xp: number;
  streak: number;
  totalWordsLearned: number;
  dailyGoal: number;
  difficultyPreference: string;
  notificationsEnabled: boolean;
  publicProfile: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface UpdateProfileData {
  name?: string;
  avatarUrl?: string | null;
  bio?: string | null;
  website?: string | null;
  location?: string | null;
  dailyGoal?: number;
  difficultyPreference?: string;
  notificationsEnabled?: boolean;
  publicProfile?: boolean;
}

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findProfileById(userId: string): Promise<ProfileData | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: PROFILE_SELECT,
    });
    return user as ProfileData | null;
  }

  async updateProfile(userId: string, data: UpdateProfileData) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
        ...(data.bio !== undefined && { bio: data.bio }),
        ...(data.website !== undefined && { website: data.website }),
        ...(data.location !== undefined && { location: data.location }),
        ...(data.dailyGoal !== undefined && { dailyGoal: data.dailyGoal }),
        ...(data.difficultyPreference !== undefined && { difficultyPreference: data.difficultyPreference }),
        ...(data.notificationsEnabled !== undefined && { notificationsEnabled: data.notificationsEnabled }),
        ...(data.publicProfile !== undefined && { publicProfile: data.publicProfile }),
      },
      select: PROFILE_SELECT,
    });
  }
}
