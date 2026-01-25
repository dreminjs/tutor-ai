import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task, Prisma } from '@prisma/client';
import { TPaginationQuery } from '@tutor-ai/shared-types';
import { RedisService } from '../redis/redis.service';
import Redis from 'ioredis';

@Injectable()
export class TasksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {
    this.client = this.redisService.getClient();
  }

  client: Redis;

  async findMany(dto: TPaginationQuery): Promise<Task[]> {
    return await this.prisma.task.findMany({
      skip: dto.skip,
      take: dto.take,
    });
  }

  async findOne(args: Prisma.TaskFindFirstArgs): Promise<Task | null> {
    return await this.prisma.task.findFirst(args);
  }

  async count(args: Prisma.TaskCountArgs = {}): Promise<number> {
    return await this.prisma.task.count({ ...args });
  }

  async create(dto: Prisma.TaskCreateArgs): Promise<Task> {
    return await this.prisma.task.create(dto);
  }

  async saveTaskToSession(
    userId: string,
    taskContent: string,
  ): Promise<string> {
    const oldTask = await this.getTaskFromSession(userId);

    if (oldTask) {
      await this.deleteTaskFromSession(userId);
    }

    return await this.client.set(`task:${userId}`, taskContent);
  }

  async getTaskFromSession(userId: string): Promise<string | null> {
    return await this.client.get(`task:${userId}`);
  }

  async deleteTaskFromSession(userId: string): Promise<number | null> {
    return await this.client.del(`task:${userId}`);
  }
}
