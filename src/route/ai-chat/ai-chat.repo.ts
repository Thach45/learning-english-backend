import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/service/prisma.service";
import { GetScenariosResponseDto } from "./dto/get-scenarios.dto";

@Injectable()
export class AiChatRepo {
  constructor(private prisma: PrismaService) {}

  async getScenarios(
    page: number,
    limit: number,
    level: string,
  ): Promise<GetScenariosResponseDto> {
    const whereCondition = { level: level ? level : undefined };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.aiScenario.findMany({
        where: whereCondition,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.aiScenario.count({ where: whereCondition }),
    ]);

    return {
      items,
      total,
      page,
      limit,
    };
  }

  async saveNote(userId: string, text: string, context?: string, meaning?: string) {
    // Nếu không có userId, lấy user đầu tiên làm mặc định cho PoC
    let actualUserId = userId;
    if (!actualUserId) {
      const firstUser = await this.prisma.user.findFirst();
      if (!firstUser) throw new Error("No user found in DB");
      actualUserId = firstUser.id;
    }
    return this.prisma.aiChatNote.create({
      data: {
        userId: actualUserId,
        text,
        context,
        meaning,
      }
    });
  }

  async getNotes(userId: string) {
    let actualUserId = userId;
    if (!actualUserId) {
      const firstUser = await this.prisma.user.findFirst();
      if (!firstUser) throw new Error("No user found in DB");
      actualUserId = firstUser.id;
    }
    return this.prisma.aiChatNote.findMany({
      where: { userId: actualUserId },
      orderBy: { createdAt: 'desc' }
    });
  }
}
