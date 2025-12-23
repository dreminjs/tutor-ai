import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { SolutionModule } from '../solution/solution.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [SolutionModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
