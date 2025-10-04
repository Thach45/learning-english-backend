import { forwardRef, Module } from "@nestjs/common";
import { GamificationController } from "./gamification.controller";
import { GamificationService } from "./gamification.service";
import { SharedModule } from "../../shared/shared.module";
import { AchievementModule } from "../achievement/achievement.module";

@Module({
  imports: [SharedModule, forwardRef(() => AchievementModule)],
  controllers: [GamificationController],
  providers: [GamificationService],
  exports: [GamificationService],
 
})
export class GamificationModule {}
