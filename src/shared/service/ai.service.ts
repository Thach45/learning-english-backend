import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  private readonly ai: GoogleGenAI;
  private readonly modelId = 'gemini-2.5-flash'; // hoặc giữ nguyên 2.5 nếu bạn đang dùng

  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });
  }


  async ask(prompt: string): Promise<string | undefined> {
    const response = await this.ai.models.generateContent({
      model: this.modelId,
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `
Bạn là trợ lý trong app học tiếng Anh. 
Luôn trả về kết quả ngắn gọn, không giải thích thừa.
            `.trim(),
            },
          ],
        },
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    });


    return response?.text;
  }

  // Dùng riêng cho việc gợi ý từ vựng từ title + description
  async generateVocabulary(title: string, description: string, existingVocabularyWords: string[]): Promise<string[]> {
    const prompt = `
Dựa trên thông tin study set sau:

Title: ${title}
Description: ${description}
Existing vocabulary: ${existingVocabularyWords.join(', ')}
Nhiệm vụ:
- Đề xuất 10 từ vựng TIẾNG ANH phù hợp với chủ đề và không trùng với các từ đã tồn tại.
- Chỉ trả về mảng string, ví dụ: ["word1", "word2", ...]
- Không thêm giải thích, không thêm text ngoài JSON.
    `.trim();

    const raw = await this.ask(prompt);

    // Parse về mảng string[], trường hợp model trả thêm text thì cắt JSON ra sau
    try {
      const match = raw?.match(/\[[\s\S]*\]/); // bắt đoạn JSON array đầu tiên
      const jsonText = match ? match[0] : raw;
      const parsed = JSON.parse(jsonText ?? '[]');
      if (Array.isArray(parsed)) {
        return parsed.map((w) => String(w).trim()).filter(Boolean);
      }
      return [];
    } catch {
      return [];
    }
  }
}