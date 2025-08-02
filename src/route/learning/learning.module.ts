import { Module } from '@nestjs/common';
import { LearningController } from './learning.controller';
import { LearningService } from './learning.service';
import { PrismaService } from '../../shared/service/prisma.service';
import { LearningRepo } from './learning.repo';
import { GamificationModule } from '../gamification/gamification.module';

@Module({
  imports: [GamificationModule],
  controllers: [LearningController],
  providers: [LearningService, LearningRepo, PrismaService],
})
export class LearningModule {} 