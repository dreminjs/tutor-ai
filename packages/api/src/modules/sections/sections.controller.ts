import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IWithPagination } from '@tutor-ai/shared-types';
import { SectionsService } from './sections.service';
import { Section } from '@prisma/client';
import { CreateSectionDto } from './dto/create.dto';
import { FindManySectionsQuery } from './dto/find.dto';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get()
  public async findMany(
    @Query() query: FindManySectionsQuery,
  ): Promise<IWithPagination<Section>> {
    const countQuery = this.sectionsService.count();

    const itemsQuery = this.sectionsService.findMany(query);

    const [items, count] = await Promise.all([itemsQuery, countQuery]);

    return {
      items,
      total: count,
    };
  }

  @Post()
  public async createOne(@Body() dto: CreateSectionDto): Promise<Section> {
    return await this.sectionsService.create({ data: dto });
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Section | null> {
    return await this.sectionsService.findOne({
      where: { id },
    });
  }

  @Get(':id/tasks')
  public async findSectionTasks(@Param('id') id: string) {
    return await this.sectionsService.findOne({
      where: { id },
      include: {
        tasks: true,
      },
    });
  }
}
