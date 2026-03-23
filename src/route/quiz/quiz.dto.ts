import { IsString, IsNotEmpty, IsOptional, IsInt, Min, Max } from 'class-validator';

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
  mode?: 'multiple_choice' | 'fill_in_the_blank';
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
  mode?: 'multiple_choice' | 'fill_in_the_blank';
  fillBlankType?: 'meaning' | 'word';
}
