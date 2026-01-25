import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { SolutionModule } from '../solution/solution.module';
import { TasksService } from './tasks.service';
import { MinioModule } from '../minio/minio.module';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [SolutionModule, MinioModule, RedisModule],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
