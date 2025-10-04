import { IsString, IsInt, IsOptional, IsBoolean, IsEnum, Min } from 'class-validator';
import { AchievementRarity, AchievementType } from 'generated/prisma';


export class CreateAchievementDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(AchievementType)
  type: AchievementType;

  @IsInt()
  @Min(1)
  targetValue: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  duration?: number;

  @IsEnum(AchievementRarity)
  rarity: AchievementRarity;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  xpReward?: number;
}

export class UpdateAchievementDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  targetValue?: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  duration?: number;

  @IsEnum(AchievementRarity)
  @IsOptional()
  rarity?: AchievementRarity;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsInt()
  @Min(0)
  @IsOptional()
  xpReward?: number;
}

export class AchievementResponseDto {
  id: string;
  title: string;
  description: string;
  type: AchievementType;
  targetValue: number;
  duration?: number;
  rarity: AchievementRarity;
  icon?: string;
  isActive: boolean;
  xpReward: number;
  createdAt: Date;
  updatedAt: Date;
}

export class UserAchievementResponseDto {
  id: string;
  userId: string;
  achievement: AchievementResponseDto;
  progress: number;
  isCompleted: boolean;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Query params cho việc lọc achievement
export class GetAchievementsQueryDto {
  @IsEnum(AchievementType)
  @IsOptional()
  type?: AchievementType;

  @IsEnum(AchievementRarity)
  @IsOptional()
  rarity?: AchievementRarity;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}