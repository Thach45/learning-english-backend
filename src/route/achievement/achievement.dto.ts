import { IsString, IsInt, IsOptional, IsBoolean, IsEnum, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
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

  constructor(partial: Partial<AchievementResponseDto>) {
    Object.assign(this, partial);
  }
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

// Query params cho danh sách achievement (admin, có phân trang)
export class GetAchievementsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  pageSize?: number = 20;

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

// Pagination trong response
export class AchievementPaginationDto {
  page: number;
  pageSize: number;
  total: number;

  constructor(partial: Partial<AchievementPaginationDto>) {
    Object.assign(this, partial);
  }
}

// Response danh sách achievement (admin)
export class GetAchievementsResponseDto {
  items: AchievementResponseDto[];
  pagination: AchievementPaginationDto;

  constructor(partial: Partial<GetAchievementsResponseDto>) {
    this.items = partial.items ?? [];
    this.pagination = new AchievementPaginationDto(partial.pagination ?? { page: 1, pageSize: 20, total: 0 });
  }
}