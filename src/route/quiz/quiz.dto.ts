import { IsString, IsNotEmpty, IsArray, ValidateNested, IsBoolean, IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

// Generate Quiz DTO
export class GenerateQuizDto {
  @IsString()
  @IsNotEmpty()
  studySetId: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  questionCount?: number = 10;

  @IsOptional()
  @IsString()
  mode?: "multiple_choice" | "fill_in_the_blank";
}

// Quiz Question Response DTO
export class QuizQuestionDto {
  id: string;
  vocabularyId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  word: string;
  pronunciation?: string;
  definition?: string;
  example?: string;
}

// Submit Quiz Answer DTO
export class QuizAnswerDto {
  @IsString()
  @IsNotEmpty()
  vocabularyId: string;

  @IsString()
  @IsNotEmpty()
  userAnswer: string;
}

// Submit Quiz DTO
export class SubmitQuizDto {
  @IsString()
  @IsNotEmpty()
  studySetId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuizAnswerDto)
  answers: QuizAnswerDto[];
}

// Quiz Result Response DTO
export class QuizResultDto {
  score: number;
  correct: number;
  total: number;
  message: string;
  details: Array<{
    vocabularyId: string;
    word: string;
    isCorrect: boolean;
    userAnswer: string;
    correctAnswer: string;
  }>;
}

