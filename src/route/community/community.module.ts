import { Module } from "@nestjs/common";
import { CommunityController } from "./community.controller";
import { CommunityService } from "./community.service";
import { PrismaService } from "src/shared/service/prisma.service";
import { CommunityRepository } from "./community.repo";

@Module({
  controllers: [CommunityController],
  providers: [CommunityService, CommunityRepository, PrismaService],
})
export class CommunityModule {}

