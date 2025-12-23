import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Subject, Prisma } from '@prisma/client';
import { TPaginationQuery } from '@tutor-ai/shared-types';

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: TPaginationQuery): Promise<Subject[]> {
    return await this.prisma.subject.findMany({
      skip: dto.skip,
      take: dto.take,
    });
  }

  async findOne(args: Prisma.SubjectFindUniqueArgs): Promise<Subject | null> {
    return await this.prisma.subject.findUnique(args);
  }

  async count(args: Prisma.SubjectCountArgs = {}): Promise<number> {
    return await this.prisma.subject.count({ ...args });
  }

  async create(dto: Prisma.SubjectCreateArgs): Promise<Subject> {
    return await this.prisma.subject.create(dto);
  }
};