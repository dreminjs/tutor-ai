import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolutionModule } from '../solution/solution.module';
import { TasksModule } from '../tasks/tasks.module';
import { SectionsModule } from '../sections/sections.module';
import { SubjectsModule } from '../subjects/subjects.module';

@Module({
  imports: [
    AiModule,
    PrismaModule,
    SolutionModule,
    TasksModule,
    SectionsModule,
    SubjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
