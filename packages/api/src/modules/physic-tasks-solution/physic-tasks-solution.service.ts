import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PhysicTasksSolutionService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(dto: Prisma.PhysicTaskSolutionCreateArgs) {
    return await this.prisma.physicTaskSolution.create(dto);
  }

  public async findMany(dto: Prisma.PhysicTaskSolutionFindManyArgs) {
    return await this.prisma.physicTaskSolution.findMany(dto);
  }
}
