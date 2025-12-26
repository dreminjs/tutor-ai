import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { SolutionModule } from '../solution/solution.module';
import { TasksService } from './tasks.service';
import { MinioModule } from '../minio/minio.module';

@Module({
  imports: [SolutionModule, MinioModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
