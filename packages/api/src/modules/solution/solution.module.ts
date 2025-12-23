import { Module } from '@nestjs/common';
import { SolutionService } from './solution.service';

@Module({
  providers: [SolutionService],
  exports: [SolutionService],
})
export class SolutionModule {}
