import { Module } from '@nestjs/common';
import { PhysicTasksController } from './physic-tasks.controller';
import { PhysicTasksSolutionModule } from '../physic-tasks-solution/physic-tasks-solution.module';
import { PhysicTasksService } from './physic-tasks.service';

@Module({
  imports: [PhysicTasksSolutionModule],
  controllers: [PhysicTasksController],
  providers: [PhysicTasksService],
})
export class PhysicTasksModule {}
