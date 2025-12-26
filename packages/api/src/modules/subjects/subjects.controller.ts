import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { Subject } from '@prisma/client';
import { CreateSubjectDto } from './dto/create.dto';
import { FindManyQuery } from 'src/interfaces/query.interfaces';
import type { IWithPagination } from '@tutor-ai/shared-types';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get()
  public async findMany(
    @Query() query: FindManyQuery,
  ): Promise<IWithPagination<Subject>> {
    const countQuery = this.subjectsService.count();

    const itemsQuery = this.subjectsService.findMany(query);

    const [items, count] = await Promise.all([itemsQuery, countQuery]);

    return {
      items,
      total: count,
    };
  }

  @Post()
  public async createOne(@Body() dto: CreateSubjectDto): Promise<Subject> {
    return await this.subjectsService.create({ data: dto });
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Subject | null> {
    return await this.subjectsService.findOne({
      where: { id },
    });
  }

  @Get(':id/sections')
  public async findSubjectSections(@Param('id') id: string) {
    return await this.subjectsService.findOne({
      where: { id },
      include: {
        sections: true,
      },
    });
  }
}
