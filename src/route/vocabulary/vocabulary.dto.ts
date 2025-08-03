import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CefrLevel, PartOfSpeech } from "src/types/vocabulary-shared.type";

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

    @IsEnum(CefrLevel)
    @IsOptional()
    cefrLevel?: CefrLevel;

    @IsEnum(PartOfSpeech)
    @IsOptional()
    partOfSpeech: PartOfSpeech = PartOfSpeech.OTHER;

    @IsArray()
    @IsEnum(PartOfSpeech, { each: true })
    @IsOptional()
    alternativePartOfSpeech: PartOfSpeech[] = [];

    constructor(data: { word: string; meaning: string } & Partial<Omit<VocabularyResponseDto, 'word' | 'meaning'>>) {
        this.word = data.word;
        this.pronunciation = data.pronunciation;
        this.meaning = data.meaning;
        this.definition = data.definition;
        this.example = data.example;
        this.imageUrl = data.imageUrl;
        this.audioUrl = data.audioUrl;
        this.cefrLevel = data.cefrLevel;
        this.partOfSpeech = data.partOfSpeech || PartOfSpeech.OTHER;
        this.alternativePartOfSpeech = data.alternativePartOfSpeech || [];
    }
}

