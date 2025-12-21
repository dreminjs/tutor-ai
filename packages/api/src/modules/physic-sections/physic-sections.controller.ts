import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PhysicSectionsService } from './physic-sections.service';
import type {
  IPaginationQueryParameters,
  IWithPagination,
} from '@tutor-ai/shared-types';
import { PhysicSection } from '@prisma/client';
import { CreatePhysicSectionDto } from './dto/create.dto';

@Controller('physic-sections')
export class PhysicSectionsController {
  constructor(private readonly physicSectionsService: PhysicSectionsService) {}

  @Get()
  public async findMany(
    @Query() query: IPaginationQueryParameters,
  ): Promise<IWithPagination<PhysicSection>> {
    const countQuery = this.physicSectionsService.count();

    const itemsQuery = this.physicSectionsService.findMany(query);

    const [items, count] = await Promise.all([itemsQuery, countQuery]);

    return {
      items,
      total: count,
    };
  }

  @Post()
  public async createOne(
    @Body() dto: CreatePhysicSectionDto,
  ): Promise<PhysicSection> {
    return await this.physicSectionsService.create({ data: dto });
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<PhysicSection | null> {
    return await this.physicSectionsService.findOne({
      where: { id },
    });
  }

  @Get(':id/tasks')
  public async findSectionTasks(@Param('id') id: string) {
    return await this.physicSectionsService.findOne({
      where: { id },
      include: {
        physicTasks: true,
      },
    });
  }
}
