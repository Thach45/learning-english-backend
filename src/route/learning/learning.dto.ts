import { IsString, IsOptional, IsNumber, IsDate, IsBoolean, IsEnum } from 'class-validator';
import { Level } from 'generated/prisma';

export class ReviewVocabularyDto {
  @IsString()
  vocabularyId: string;
  @IsString()
  word: string;
  @IsString()
  meaning: string;
  @IsString()
  @IsOptional()
  definition?: string;
  // @IsEnum(Level)
  // level: Level;
  @IsString()
  @IsOptional()
  pronunciation?: string;
  @IsString()
  @IsOptional()
  example?: string;
  @IsString()
  imageUrl?: string;
  @IsString()
  audioUrl?: string;
  @IsString()
  status: string;
  @IsString()
  nextReviewAt?: string;
  @IsNumber()
  reviewCount: number;
  @IsNumber()
  correctCount: number;
  @IsNumber()
  incorrectCount: number;
  @IsNumber()
  easeFactor: number;
  @IsNumber()
  interval: number;
}
export class ReviewVocabularyListResponseDto {
    data: ReviewVocabularyDto[];
    constructor(data: ReviewVocabularyDto[]) {
      this.data = data;
    }
  }

export class UpdateProgressDto {
  @IsString()
  userId: string;
  @IsString()
  result: string; // correct | incorrect | partial
}

export class UserProgressDto {
  @IsNumber()
  total: number;
  @IsNumber()
  learned: number;
  @IsNumber()
  review: number;
  @IsNumber()
  mastered: number;
  @IsNumber()
  accuracy: number;
}

export class UserProgressResponseDto extends UserProgressDto {
  constructor(data: UserProgressDto) {
    super();
    Object.assign(this, data);
  }
}

export class StudySetVocabularyDto {
  @IsString()
  vocabularyId: string;
  @IsString()
  word: string;
  @IsString()
  meaning: string;
  @IsString()
  status: string;
}

export class UpdateVocabularyProgressResponseDto {
  @IsBoolean()
  ok: boolean;
  @IsString()
  message: string;
  constructor(data: { ok: boolean, message: string}) {
    Object.assign(this, data);
  }
}

export class StudySetStatsDto {
  @IsNumber()
  total: number;

  @IsNumber()
  learned: number;

  @IsNumber()
  needReview: number;

  @IsNumber()
  mastered: number;

  @IsNumber()
  allReview: number;
}

export class StudySetStatsResponseDto {
  data: StudySetStatsDto;

  constructor(data: StudySetStatsDto) {
    this.data = data;
  }
}
export class GetVocabularyQueryDto {
  @IsString()
  mode: string;
  
}