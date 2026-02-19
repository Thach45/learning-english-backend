import { Module } from "@nestjs/common";
import { DashboardController } from "./dashboard.controller";
import { DashboardService } from "./dashboard.service";
import { DashboardRepository } from "./dashboard.repo";
import { AuthorizationGuard } from "src/shared/guards/authorization.guard";

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, DashboardRepository, AuthorizationGuard],
})
export class DashboardModule {}
