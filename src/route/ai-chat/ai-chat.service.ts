import { Injectable } from "@nestjs/common";
import { AiChatRepo } from "src/route/ai-chat/ai-chat.repo";

@Injectable()
export class AiChatService {
  constructor(private readonly repo: AiChatRepo) {}

  getScenarios = async (page: number, limit: number, level: string) => {
    return this.repo.getScenarios(page, limit, level);
  };
}
