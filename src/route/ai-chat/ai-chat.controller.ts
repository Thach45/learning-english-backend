import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AiChatService } from "./ai-chat.service";
import { GetScenariosQueryDto } from "./dto/get-scenarios.dto";

@Controller("ai-chat")
export class AiChatController {
  constructor(private readonly aiChatService: AiChatService) {}

  @Post("/session/:sessionId/message")
  chat(
    @Param("sessionId") sessionId: string, 
    @Body() body: { message: string; history?: any[]; scenarioContext?: string }
  ) {
    return this.aiChatService.chat(
      sessionId, 
      body.message, 
      body.history || [], 
      body.scenarioContext || ''
    );
  }
  @Get("/scenarios")
  getScenarios(@Query() query: GetScenariosQueryDto) {
    return this.aiChatService.getScenarios(
      query.page,
      query.limit,
      query.level || "",
    );
  }

  @Post("/hint")
  getHint(@Body() body: { hintRequest: string; history?: any[] }) {
    return this.aiChatService.getHint(body.hintRequest, body.history || []);
  }

  @Post("/notes")
  saveNote(@Body() body: { userId?: string; text: string; context?: string; meaning?: string }) {
    return this.aiChatService.saveNote(body.userId || '', body.text, body.context, body.meaning);
  }

  @Get("/notes")
  getNotes(@Query("userId") userId: string) {
    return this.aiChatService.getNotes(userId || '');
  }

  @Post("/reflex/generate")
  generateReflexPrompt(@Body() body: { level?: string }) {
    return this.aiChatService.generateReflexPrompt(body.level || 'BEGINNER');
  }

  @Post("/reflex/evaluate")
  evaluateReflex(@Body() body: { vietnamese: string; english: string }) {
    return this.aiChatService.evaluateReflex(body.vietnamese, body.english);
  }
}
