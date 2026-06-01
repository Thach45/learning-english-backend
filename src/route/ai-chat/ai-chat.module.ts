import { Module } from "@nestjs/common";
import { AiChatController } from "./ai-chat.controller";
import { AiChatService } from "./ai-chat.service";
import { AiChatRepo } from "src/route/ai-chat/ai-chat.repo";

@Module({
  controllers: [AiChatController],
  providers: [AiChatService, AiChatRepo],
})
export class AiChatModule {}
