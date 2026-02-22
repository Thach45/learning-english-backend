import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  Min,
  Max,
  MaxLength,
  IsIn,
} from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  avatarUrl?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  bio?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  website?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  location?: string | null;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(500)
  dailyGoal?: number;

  @IsOptional()
  @IsString()
  @IsIn(['beginner', 'intermediate', 'advanced'])
  difficultyPreference?: string;

  @IsOptional()
  @IsBoolean()
  notificationsEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  publicProfile?: boolean;
}

export class UserProfileResponseDto {
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

  constructor(partial: Partial<UserProfileResponseDto>) {
    Object.assign(this, partial);
  }
}
