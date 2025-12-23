import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Section, Prisma } from '@prisma/client';
import type { IPaginationQueryParameters } from '@tutor-ai/shared-types';

@Injectable()
export class SectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: IPaginationQueryParameters): Promise<Section[]> {
    return await this.prisma.section.findMany({
      skip: dto.skip,
      take: dto.take,
    });
  }

  async findOne(args: Prisma.SectionFindUniqueArgs): Promise<Section | null> {
    return await this.prisma.section.findUnique(args);
  }

  async count(args: Prisma.SectionCountArgs = {}): Promise<number> {
    return await this.prisma.section.count({ ...args });
  }

  async create(dto: Prisma.SectionCreateArgs): Promise<Section> {
    return await this.prisma.section.create(dto);
  }
}
