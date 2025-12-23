import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Section, Prisma } from '@prisma/client';
import { FindManySectionsQuery } from './dto/find.dto';

@Injectable()
export class SectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: FindManySectionsQuery): Promise<Section[]> {
    return await this.prisma.section.findMany({
      skip: dto.skip,
      take: dto.take,
      where: {
        ...(dto.subjectId && { subjectId: dto.subjectId }),
      },
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
