import { Injectable } from "@nestjs/common";
import { AiChatRepo } from "src/route/ai-chat/ai-chat.repo";
import { DeepseekService } from "src/shared/service/deepseek.service";

@Injectable()
export class AiChatService {
  constructor(
    private readonly repo: AiChatRepo,
    private readonly deepseekService: DeepseekService
  ) {}

  getScenarios = async (page: number, limit: number, level: string) => {
    return this.repo.getScenarios(page, limit, level);
  };

  async chat(
    sessionId: string, 
    message: string, 
    history: Array<{ role: 'user' | 'model'; parts: { text: string }[] }> = [],
    scenarioContext: string = ''
  ) {
    const systemInstruction = `
Bạn là một đối tác giao tiếp trong phần Luyện nói Tiếng Anh (English Speaking Roleplay).
Ngữ cảnh của bạn: ${scenarioContext}

Nhiệm vụ:
1. Đóng vai và tiếp tục cuộc hội thoại với người dùng một cách tự nhiên bằng tiếng Anh (1-3 câu).
2. Nếu người dùng mắc lỗi ngữ pháp hoặc dùng từ chưa tự nhiên ở câu trước, hãy góp ý lịch sự bằng tiếng Việt.
3. Cung cấp một gợi ý câu trả lời bằng tiếng Anh để người dùng biết cách đối đáp lại.
4. Giải thích ngắn gọn cấu trúc ngữ pháp/từ vựng dùng trong câu gợi ý đó bằng tiếng Việt.

ĐỊNH DẠNG TRẢ VỀ BẮT BUỘC (JSON):
Bạn phải trả về duy nhất một đối tượng JSON hợp lệ, không có markdown hoặc bất kỳ văn bản nào ngoài JSON. Cấu trúc:
{
  "question": "Câu trả lời/câu hỏi đối thoại tiếp theo của bạn bằng tiếng Anh",
  "suggest": "Câu tiếng Anh gợi ý để người dùng trả lời lại bạn",
  "explain": "Giải thích ngữ pháp/từ vựng ngắn gọn của câu gợi ý bằng tiếng Việt",
  "feedback": "Nhận xét lỗi ngữ pháp hoặc từ vựng của user ở câu trước bằng tiếng Việt (Nếu user nói đúng hoàn toàn, hãy để trường này là null hoặc rỗng)"
}
    `.trim();

    // Map history to Deepseek format
    const deepseekHistory = history.map(item => ({
      role: item.role === 'model' ? 'assistant' : 'user' as 'assistant' | 'user',
      content: item.parts[0]?.text || ''
    }));

    const responseText = await this.deepseekService.chatWithHistory(
      message, 
      deepseekHistory, 
      systemInstruction
    );

    let parsedContent = '';
    let suggestedUserReply = '';
    let grammarExplanation = '';
    let grammarFeedback = '';

    const cleanTextRaw = responseText?.trim() || '';
    const firstBracket = cleanTextRaw.indexOf('{');
    const lastBracket = cleanTextRaw.lastIndexOf('}');

    if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
      const jsonText = cleanTextRaw.substring(firstBracket, lastBracket + 1);

      try {
        const parsed = JSON.parse(jsonText);
        parsedContent = parsed.question || parsed.content || parsed.text || parsed.message || '';
        suggestedUserReply = parsed.suggest || parsed.suggestedUserReply || parsed.suggestedReply || '';
        grammarExplanation = parsed.explain || parsed.grammarExplanation || parsed.explanation || '';
        grammarFeedback = parsed.feedback || parsed.grammarFeedback || '';
      } catch (e) {
        console.error("Lỗi parse JSON block:", e);
        parsedContent = cleanTextRaw;
      }
    } else {
      parsedContent = cleanTextRaw;
    }

    return {
      userMessage: { id: Date.now().toString(), sender: 'USER', content: message, createdAt: new Date().toISOString() },
      aiResponse: { 
        id: Date.now().toString() + 'ai', 
        sender: 'AI', 
        content: parsedContent,
        suggestedUserReply,
        grammarExplanation,
        grammarFeedback,
        createdAt: new Date().toISOString() 
      }
    };
  }

  async getHint(
    hintRequest: string, 
    history: Array<{ role: 'user' | 'model'; parts: { text: string }[] }> = []
  ) {
    const systemInstruction = `
Bạn là một giáo viên tiếng Anh. Học sinh đang tham gia một cuộc hội thoại tiếng Anh và gặp khó khăn.
Học sinh vừa yêu cầu trợ giúp: "${hintRequest}"

Dựa vào lịch sử hội thoại gần đây, hãy gợi ý MỘT câu tiếng Anh ngắn gọn, tự nhiên và đúng ngữ cảnh để học sinh có thể nói tiếp.
Ngoài ra, hãy giải thích ngắn gọn về ngữ pháp hoặc cấu trúc câu được sử dụng trong câu gợi ý đó bằng tiếng Việt.

Yêu cầu ĐỊNH DẠNG TRẢ VỀ:
Trả về duy nhất một chuỗi JSON hợp lệ với cấu trúc sau, không kèm bất kỳ markdown hay text nào khác bên ngoài:
{
  "suggestion": "Câu tiếng Anh gợi ý",
  "grammarExplanation": "Giải thích ngữ pháp ngắn gọn bằng tiếng Việt"
}
    `.trim();

    // Map history to Deepseek format, take last 5 messages for context
    const deepseekHistory = history.slice(-5).map(item => ({
      role: item.role === 'model' ? 'assistant' : 'user' as 'assistant' | 'user',
      content: item.parts[0]?.text || ''
    }));

    const responseText = await this.deepseekService.chatWithHistory(
      hintRequest, 
      deepseekHistory, 
      systemInstruction,
      true
    );

    let result = { suggestion: '', grammarExplanation: '' };
    try {
      let cleanText = responseText?.trim() || '{}';
      const firstBracket = cleanText.indexOf('{');
      const lastBracket = cleanText.lastIndexOf('}');
      if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
        cleanText = cleanText.substring(firstBracket, lastBracket + 1);
      }
      const parsed = JSON.parse(cleanText);
      if (parsed.suggestion) result.suggestion = parsed.suggestion;
      if (parsed.grammarExplanation) result.grammarExplanation = parsed.grammarExplanation;
    } catch (e) {
      console.error("Lỗi parse JSON từ getHint:", e);
      result.suggestion = responseText?.trim() || '';
    }

    return result;
  }

  async saveNote(userId: string, text: string, context?: string, meaning?: string) {
    return this.repo.saveNote(userId, text, context, meaning);
  }

  async getNotes(userId: string) {
    return this.repo.getNotes(userId);
  }

  async generateReflexPrompt(level: string = 'BEGINNER') {
    const topics = ['nhà hàng', 'du lịch', 'mua sắm', 'công sở', 'thời tiết', 'sở thích', 'gia đình', 'sức khoẻ', 'thể thao', 'cảm xúc', 'giao tiếp hằng ngày', 'phỏng vấn', 'đặt phòng khách sạn'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const randomSeed = Math.random().toString(36).substring(7);

    const systemInstruction = `
Bạn là giáo viên tiếng Anh đang tạo bài tập luyện phản xạ.
Hãy sinh ra MỘT câu tiếng Việt cực kỳ ngẫu nhiên (chủ đề: ${randomTopic}) phù hợp với người học tiếng Anh trình độ ${level}.
Yêu cầu: Câu nên ngắn gọn, tự nhiên, dùng trong giao tiếp thực tế. TUYỆT ĐỐI không lặp lại các câu kinh điển như "Tôi muốn uống cà phê" hay "Tôi muốn đi chơi". Hãy sáng tạo!
ĐỊNH DẠNG TRẢ VỀ BẮT BUỘC (JSON):
Bạn phải trả về duy nhất một đối tượng JSON hợp lệ, không có văn bản nào ngoài JSON.
{
  "vietnamese": "Câu tiếng Việt ngẫu nhiên",
  "context": "Ngữ cảnh hoặc ý nghĩa của câu (ví dụ: Dùng khi gọi món trong nhà hàng)"
}
    `.trim();

    const responseText = await this.deepseekService.chatWithHistory(`Tạo một câu phản xạ mới. Seed: ${randomSeed}`, [], systemInstruction);
    let result = { vietnamese: '', context: '' };
    try {
      const cleanTextRaw = responseText?.trim() || '';
      const firstBracket = cleanTextRaw.indexOf('{');
      const lastBracket = cleanTextRaw.lastIndexOf('}');
      if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
        const jsonText = cleanTextRaw.substring(firstBracket, lastBracket + 1);
        const parsed = JSON.parse(jsonText);
        result.vietnamese = parsed.vietnamese || '';
        result.context = parsed.context || '';
      }
    } catch (e) {
      console.error('Lỗi parse JSON từ generateReflexPrompt:', e);
    }
    return result;
  }

  async evaluateReflex(vietnamese: string, english: string) {
    const systemInstruction = `
Người dùng đang luyện phản xạ dịch câu tiếng Việt sang tiếng Anh.
Câu gốc: "${vietnamese}"
Câu người dùng dịch: "${english}"

Hãy đánh giá câu dịch của người dùng theo các tiêu chí sau và trả về DUY NHẤT một đối tượng JSON hợp lệ, không có chữ bên ngoài:
{
  "accuracy": (Số điểm từ 1 đến 10 về độ chính xác ngữ pháp và ý nghĩa),
  "naturalness": (Số điểm từ 1 đến 10 về độ tự nhiên, giống người bản xứ),
  "feedback": "Nhận xét chi tiết bằng tiếng Việt, chỉ ra lỗi sai nếu có và khen ngợi nếu làm tốt",
  "betterVersion": "Một câu dịch mẫu hoàn hảo và tự nhiên nhất",
  "vocabulary": ["Từ vựng hoặc idiom hay liên quan", "Từ vựng 2..."],
  "situations": "Tình huống thực tế nên dùng câu này"
}
    `.trim();

    const responseText = await this.deepseekService.chatWithHistory('Đánh giá câu dịch này.', [], systemInstruction);
    let result = {
      accuracy: 0,
      naturalness: 0,
      feedback: '',
      betterVersion: '',
      vocabulary: [],
      situations: ''
    };
    try {
      const cleanTextRaw = responseText?.trim() || '';
      const firstBracket = cleanTextRaw.indexOf('{');
      const lastBracket = cleanTextRaw.lastIndexOf('}');
      if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
        const jsonText = cleanTextRaw.substring(firstBracket, lastBracket + 1);
        const parsed = JSON.parse(jsonText);
        result = {
          ...result,
          ...parsed
        };
      }
    } catch (e) {
      console.error('Lỗi parse JSON từ evaluateReflex:', e);
    }
    return result;
  }
}

