import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PhysicTask, Prisma } from '@prisma/client';
import type { IPaginationQueryParameters } from '@tutor-ai/shared-types';

@Injectable()
export class PhysicTasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: IPaginationQueryParameters): Promise<PhysicTask[]> {
    return await this.prisma.physicTask.findMany({
      skip: dto.skip,
      take: dto.take,
    });
  }

  async count(args: Prisma.PhysicTaskCountArgs = {}): Promise<number> {
    return await this.prisma.physicTask.count({ ...args });
  }

  async create(dto: Prisma.PhysicTaskCreateArgs): Promise<PhysicTask> {
    return await this.prisma.physicTask.create(dto);
  }
}
