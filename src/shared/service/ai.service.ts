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

  async generateVocabularyByArticle(text: string): Promise<string[]> {
    const prompt = `
You are an expert English teacher. Analyze the following text extracted from an IELTS/TOEIC reading passage.

Task:
1. Identify 15-20 important vocabulary words (Level B1-C2, Academic words).
2. Ignore simple words (the, a, is, are, etc.) and common verbs (go, have, make, etc.).
3. Focus on: academic words, advanced adjectives, phrasal verbs, collocations.
4. Return ONLY a JSON array of base form words (infinitive for verbs, singular for nouns).
5. Do NOT include any explanation, markdown, or extra text - ONLY the JSON array.

Text to analyze:
"""
${text.slice(0, 8000)}
"""

Output format (ONLY this, nothing else):
["sustainable", "cornerstone", "compromise", "mitigate", "ubiquitous", "detrimental"]
    `.trim();

    const raw = await this.ask(prompt);
    
    // Parse JSON response
    try {
      // Remove markdown code blocks if present
      let cleaned = raw?.trim() ?? '';
      if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```\n?$/g, '');
      }
      
      const words = JSON.parse(cleaned);
      
      if (!Array.isArray(words)) {
        throw new Error('Response is not an array');
      }
      
      return words;
    } catch (error) {
      console.error('Failed to parse AI response:', raw);
      throw new Error('AI returned invalid JSON format');
    }
  }


}

