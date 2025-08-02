import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './route/auth/auth.module';
import { CategoryModule } from './route/category/category.module';
import { StudySetModule } from './route/study-set/study-set.module';
import { VocabularyModule } from './route/vocabulary/vocabulary.module';
import { LearningModule } from './route/learning/learning.module';
import { TranslateModule } from './route/translate/translate.module';
import { GamificationModule } from './route/gamification/gamification.module';

@Module({
  imports: [
    SharedModule,
    AuthModule,
    CategoryModule,
    StudySetModule,
    VocabularyModule,
    LearningModule,
    TranslateModule,
    GamificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
