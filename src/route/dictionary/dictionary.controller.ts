import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('dictionary')
export class DictionaryController {
  @Get('cambridge')
  async getCambridgeDefinition(@Query('word') word: string) {
    try {
      const response = await axios.get(
        `https://dictionary.cambridge.org/vi/dictionary/english/${encodeURIComponent(word)}`,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
} 