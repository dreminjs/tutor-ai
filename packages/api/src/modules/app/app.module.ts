import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { PhysicTasksModule } from '../physic-tasks/physic-tasks.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhysicSectionsModule } from '../physic-sections/physic-sections.module';
import { PhysicTasksSolutionModule } from '../physic-tasks-solution/physic-tasks-solution.module';

@Module({
  imports: [
    AiModule,
    PrismaModule,
    PhysicTasksModule,
    PhysicSectionsModule,
    PhysicTasksSolutionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
