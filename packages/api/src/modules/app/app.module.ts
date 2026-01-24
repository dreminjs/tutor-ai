import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolutionModule } from '../solution/solution.module';
import { TasksModule } from '../tasks/tasks.module';
import { SectionsModule } from '../sections/sections.module';
import { SubjectsModule } from '../subjects/subjects.module';
import { MinioModule } from '../minio/minio.module';
import { TokenModule } from '../token/token.module';
import { RedisModule } from '../redis/redis.module';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AiModule,
    PrismaModule,
    SolutionModule,
    TasksModule,
    SectionsModule,
    SubjectsModule,
    MinioModule,
    TokenModule,
    RedisModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
