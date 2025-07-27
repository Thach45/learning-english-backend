import { Body, Controller, Post } from '@nestjs/common';
import { TranslateService } from './translate.service';

interface TranslateRequest {
  text: string;
  from: string;
  to: string;
}

@Controller('translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @Post()
  async translate(@Body() { text, from, to }: TranslateRequest) {
    const result = await this.translateService.translate(text, from, to);
    return { text: result };
  }
} 