import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class VocabularyResponseDto {
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

    constructor(data: VocabularyResponseDto) {
        this.word = data.word;
        this.pronunciation = data.pronunciation;
        this.meaning = data.meaning;
        this.definition = data.definition;
        this.example = data.example;
        this.imageUrl = data.imageUrl;
        this.audioUrl = data.audioUrl;
    }

}

