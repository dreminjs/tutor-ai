import { Module } from '@nestjs/common';
import { PhysicTasksSolutionService } from './physic-tasks-solution.service';

@Module({
  providers: [PhysicTasksSolutionService],
  exports: [PhysicTasksSolutionService],
})
export class PhysicTasksSolutionModule {}
