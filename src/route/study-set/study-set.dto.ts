import { PartialType } from '@nestjs/mapped-types';
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested, IsNotEmpty, IsMongoId, IsBoolean } from "class-validator";

enum Level {
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED',
}

class VocabularyDto {
    @IsString()
    @IsNotEmpty()
    word: string;

    @IsString()
    @IsOptional()
    pronunciation?: string;

    @IsString()
    @IsNotEmpty()
    meaning: string;
    
    @IsString()
    @IsOptional()
    definition?: string;

    @IsString()
    @IsOptional()
    example?: string;

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsOptional()
    @IsString()
    audioUrl?: string;

}

export class CreateStudySetWithVocabDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsMongoId()
    @IsNotEmpty()
    categoryId: string;

    @IsEnum(Level)
    @IsOptional()
    level?: Level;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tags?: string[];

    @IsBoolean()
    @IsNotEmpty()
    isPublic: boolean;

}

export class UpdateStudySetDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsMongoId()
    @IsOptional()
    categoryId?: string;

    @IsEnum(Level)
    @IsOptional()
    level?: Level;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tags?: string[];

    @IsBoolean()
    @IsNotEmpty()
    isPublic: boolean;
}


export class AddVocabularyDto extends VocabularyDto {}

export class UpdateVocabularyDto extends VocabularyDto{} 