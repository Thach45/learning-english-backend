import { BadRequestException, ClassSerializerInterceptor, Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { PartOfSpeech, VocabularyResponseDto } from './vocabulary.dto';

@Controller('vocabulary')
@UseInterceptors(ClassSerializerInterceptor)
export class VocabularyController {
    constructor(private readonly vocabularyService: VocabularyService) {}

    @Get()
    // @Auth(['access-token'], "or")
    // @UseGuards(AuthenticationGuard)
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
}
