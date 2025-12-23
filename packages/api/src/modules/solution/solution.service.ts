import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SolutionService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(dto: Prisma.SolutionCreateArgs) {
    return await this.prisma.solution.create(dto);
  }

  public async findMany(dto: Prisma.SolutionFindManyArgs) {
    return await this.prisma.solution.findMany(dto);
  }
}
