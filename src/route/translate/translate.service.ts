import { Injectable } from '@nestjs/common';
import { translate } from 'google-translate-api-x';

@Injectable()
export class TranslateService {
  async translate(text: string, from: string, to: string): Promise<string> {
    try {
      const result = await translate(text, { from, to });
      return result.text;
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }
} 