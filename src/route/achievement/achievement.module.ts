import { Module, forwardRef } from '@nestjs/common';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';
import { GamificationModule } from '../gamification/gamification.module';

@Module({

  imports: [forwardRef(() => GamificationModule)],
  controllers: [AchievementController],
  providers: [AchievementService],
  exports: [AchievementService],
})
export class AchievementModule {}