import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PhysicSection, Prisma } from '@prisma/client';
import type { IPaginationQueryParameters } from '@tutor-ai/shared-types';

@Injectable()
export class PhysicSectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: IPaginationQueryParameters): Promise<PhysicSection[]> {
    return await this.prisma.physicSection.findMany({
      skip: dto.skip,
      take: dto.take,
    });
  }

  async findOne(
    args: Prisma.PhysicSectionFindUniqueArgs,
  ): Promise<PhysicSection | null> {
    return await this.prisma.physicSection.findUnique(args);
  }

  async count(args: Prisma.PhysicSectionCountArgs = {}): Promise<number> {
    return await this.prisma.physicSection.count({ ...args });
  }

  async create(dto: Prisma.PhysicSectionCreateArgs): Promise<PhysicSection> {
    return await this.prisma.physicSection.create(dto);
  }
};