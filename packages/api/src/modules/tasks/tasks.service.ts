import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task, Prisma } from '@prisma/client';
import type { IPaginationQueryParameters } from '@tutor-ai/shared-types';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: IPaginationQueryParameters): Promise<Task[]> {
    return await this.prisma.task.findMany({
      skip: dto.skip,
      take: dto.take,
    });
  }

  async count(args: Prisma.TaskCountArgs = {}): Promise<number> {
    return await this.prisma.task.count({ ...args });
  }

  async create(dto: Prisma.TaskCreateArgs): Promise<Task> {
    return await this.prisma.task.create(dto);
  }
}
