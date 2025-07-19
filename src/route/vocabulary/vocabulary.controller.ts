import { ClassSerializerInterceptor, Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { Auth } from 'src/shared/decorator/auth.decorator';
import { VocabularyResponseDto } from './vocabulary.dto';

@Controller('vocabulary')
@UseInterceptors(ClassSerializerInterceptor)
export class VocabularyController {
    constructor(private readonly vocabularyService: VocabularyService) {}

    @Get()
    // @Auth(['access-token'], "or")
    // @UseGuards(AuthenticationGuard)
    async getVocabulary(@Query('word') word: string){
        const vocabulary = await this.vocabularyService.getVocabulary(word);
        return new VocabularyResponseDto(vocabulary);
    }
}
