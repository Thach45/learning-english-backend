import { BadRequestException, ClassSerializerInterceptor, Controller, Get, Post, Query, Body, UseGuards, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { PartOfSpeech, VocabularyResponseDto } from './vocabulary.dto';
import { translate } from 'google-translate-api-x';

@Controller('vocabulary')
@UseInterceptors(ClassSerializerInterceptor)
export class VocabularyController {
    constructor(private readonly vocabularyService: VocabularyService) {}

    @Post('translate')
    async translate(
        @Body() body: { text: string; from: string; to: string }
    ) {
        try {
            const result = await translate(body.text, {
                from: body.from,
                to: body.to
            });
            return { text: result.text };
        } catch (error) {
            throw new BadRequestException('Translation failed');
        }
    }

    @Get()
    async getVocabulary(
        @Query('word') word: string,
        @Query('partOfSpeech') partOfSpeech?: PartOfSpeech
    ) {
        if (!word) {
            throw new BadRequestException('Word is required');
        }

        if (partOfSpeech && !Object.values(PartOfSpeech).includes(partOfSpeech)) {
            throw new BadRequestException('Invalid part of speech');
        }

        const vocabulary = await this.vocabularyService.getVocabulary(word, partOfSpeech);
        return new VocabularyResponseDto(vocabulary);
    }

    @Get("search")
    async searchVocabulary(
        @Query('word') word: string,
    ) {
        if (!word) {
            throw new BadRequestException('Word is required');
        }

        const result = await this.vocabularyService.searchVocabulary(word);
        
        if (result.status === 'error') {
            throw new HttpException(result.message || 'Failed to fetch data', HttpStatus.NOT_FOUND);
        }

        return result;
    }

    
}
