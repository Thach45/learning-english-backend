import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './route/auth/auth.module';
import { StudySetModule } from './route/study-set/study-set.module';
import { CategoryModule } from './route/category/category.module';
import { VocabularyModule } from './route/vocabulary/vocabulary.module';



@Module({
  imports: [ SharedModule, AuthModule, StudySetModule, CategoryModule, VocabularyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
