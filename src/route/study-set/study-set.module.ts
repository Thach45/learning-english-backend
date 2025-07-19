import { Module } from '@nestjs/common';
import { StudySetService } from './study-set.service';
import { StudySetController } from './study-set.controller';

@Module({
  controllers: [StudySetController],
  providers: [StudySetService],
})
export class StudySetModule {} 