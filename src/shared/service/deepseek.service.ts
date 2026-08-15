import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class DeepseekService {
  private readonly ai: OpenAI;
  private readonly modelId = 'deepseek-chat';

  constructor() {
    this.ai = new OpenAI({
      baseURL: 'https://api.deepseek.com/v1',
      apiKey: process.env.DEEPSEEK_API_KEY!,
    });
  }

  async chatWithHistory(
    message: string,
    history: Array<{ role: 'user' | 'assistant'; content: string }>,
    systemInstruction: string = 'Bạn là trợ lý AI.',
    jsonMode: boolean = false
  ): Promise<string | undefined> {
    const messages: any[] = [
      {
        role: 'system',
        content: systemInstruction,
      },
      ...history,
      {
        role: 'user',
        content: message,
      },
    ];

    try {
      const response = await this.ai.chat.completions.create({
        model: this.modelId,
        messages: messages,
        ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
      });

      return response.choices[0]?.message?.content || undefined;
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      throw error;
    }
  }
}
