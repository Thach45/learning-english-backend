import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { UpdateProfileDto, UserProfileResponseDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async getMe(userId: string): Promise<UserProfileResponseDto> {
    const profile = await this.userRepo.findProfileById(userId);
    if (!profile) {
      throw new NotFoundException('User not found');
    }
    return new UserProfileResponseDto(profile);
  }

  async updateMe(userId: string, dto: UpdateProfileDto): Promise<UserProfileResponseDto> {
    const profile = await this.userRepo.findProfileById(userId);
    if (!profile) {
      throw new NotFoundException('User not found');
    }
    const updated = await this.userRepo.updateProfile(userId, {
      name: dto.name,
      avatarUrl: dto.avatarUrl,
      bio: dto.bio,
      website: dto.website,
      location: dto.location,
      dailyGoal: dto.dailyGoal,
      difficultyPreference: dto.difficultyPreference,
      notificationsEnabled: dto.notificationsEnabled,
      publicProfile: dto.publicProfile,
    });
    return new UserProfileResponseDto(updated);
  }
}
