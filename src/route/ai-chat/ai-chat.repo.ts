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
}
