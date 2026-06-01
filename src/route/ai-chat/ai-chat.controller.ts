import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AiChatService } from "./ai-chat.service";
import { GetScenariosQueryDto } from "./dto/get-scenarios.dto";

@Controller("ai-chat")
export class AiChatController {
  constructor(private readonly aiChatService: AiChatService) {}

  @Post("/session/:sessionId/message")
  chat(@Param("sessionId") sessionId: string, @Body() body: string) {
    console.log(`body ${body} sessionId ${sessionId}`);
    return;
  }
  @Get("/scenarios")
  getScenarios(@Query() query: GetScenariosQueryDto) {
    return this.aiChatService.getScenarios(
      query.page,
      query.limit,
      query.level || "",
    );
  }
}
