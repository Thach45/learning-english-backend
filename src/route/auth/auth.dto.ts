import { IsEmail, IsString, MinLength, MaxLength, IsOptional, IsBoolean, IsInt, IsIn } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserDto {
    id: string;
    email: string;
    name: string;
    avatarUrl: string | null;
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
    @Exclude()
    password: string;

    constructor(partial: Partial<UserDto>) {
        Object.assign(this, partial);
    }
}

export class LoginDto {
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password: string;
}

export class RegisterDto extends LoginDto {
    @IsString()
    @MinLength(3)
    @MaxLength(32)
    name: string;
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    confirmPassword: string;

    @IsOptional()
    @IsString()
    avatarUrl?: string;

    @IsOptional()
    @IsInt()
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

export class RegisterResponseDto {
    id: string;
    email: string;
    name: string;
    avatarUrl: string | null;
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
    @Exclude()
    password: string;

    constructor(partial: Partial<RegisterResponseDto>) {
        Object.assign(this, partial);
    }
}

export class LoginResponseDto {
    user: UserDto;
    accessToken: string;
    refreshToken: string;
    constructor(partial: Partial<LoginResponseDto>) {
        Object.assign(this, partial);
    }
}

export class RefreshTokenDto {
    @IsString()
    refreshToken: string;
}

export class RefreshTokenResponseDto {
    accessToken: string;
    refreshToken: string;
    constructor(partial: Partial<RefreshTokenResponseDto>) {
        Object.assign(this, partial);
    }
}

export class LogoutDto {
    @IsString()
    refreshToken: string;
}

export class LogoutResponseDto {
    message: string;
    constructor(partial: Partial<LogoutResponseDto>) {
        Object.assign(this, partial);
    }
}

export class MeResponseDto {
    id: string;
    email: string;
    name: string;
    avatarUrl: string | null;
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
    constructor(partial: Partial<MeResponseDto>) {
        Object.assign(this, partial);
    }
}