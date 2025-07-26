import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum PartOfSpeech {
    NOUN = 'NOUN',
    VERB = 'VERB',
    ADJECTIVE = 'ADJECTIVE',
    ADVERB = 'ADVERB',
    PRONOUN = 'PRONOUN',
    PREPOSITION = 'PREPOSITION',
    CONJUNCTION = 'CONJUNCTION',
    INTERJECTION = 'INTERJECTION',
    DETERMINER = 'DETERMINER',
    OTHER = 'OTHER'
}

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
        this.partOfSpeech = data.partOfSpeech || PartOfSpeech.OTHER;
        this.alternativePartOfSpeech = data.alternativePartOfSpeech || [];
    }
}

