import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { PhysicTask } from '@prisma/client';
import { ZodValidationPipe } from 'nestjs-zod';
import { createPhysicTaskSolutionSchema } from '../physic-tasks-solution/dto/create.dto';
import { PhysicTasksSolutionService } from '../physic-tasks-solution/physic-tasks-solution.service';
import { CreatePhysicTaskDto } from './dto/create.dto';
import { PhysicTasksService } from './physic-tasks.service';
import type { TCreatePhysincTaskSolutionDto } from '../physic-tasks-solution/dto/create.dto';
import type {
  IPaginationQueryParameters,
  IWithPagination,
} from '@tutor-ai/shared-types';

@Controller('physic-tasks')
export class PhysicTasksController {
  constructor(
    private readonly physicTasksService: PhysicTasksService,
    private readonly physicTasksSolutionService: PhysicTasksSolutionService,
  ) {}

  @Get()
  public async findMany(
    @Query() query: IPaginationQueryParameters,
  ): Promise<IWithPagination<PhysicTask>> {
    const countQuery = this.physicTasksService.count();

    const itemsQuery = this.physicTasksService.findMany(query);

    const [items, count] = await Promise.all([itemsQuery, countQuery]);

    return {
      items,
      total: count,
    };
  }

  @Post()
  public async createOne(
    @Body() dto: CreatePhysicTaskDto,
  ): Promise<PhysicTask> {
    return await this.physicTasksService.create({
      data: {
        content: dto.content,
        physicSection: {
          connect: {
            id: dto.sectionId,
          },
        },
      },
    });
  }

  @UsePipes(new ZodValidationPipe(createPhysicTaskSolutionSchema))
  @Post(':id/solution')
  public async createOneSolution(
    @Body() dto: TCreatePhysincTaskSolutionDto,
    @Param('id') id: string,
  ) {
    return await this.physicTasksSolutionService.createOne({
      data: {
        ...dto,
        physicTask: {
          connect: {
            id,
          },
        },
      },
    });
  }

  @Get(':id/solution')
  public async findManySolutions(@Param('id') id: string) {
    return await this.physicTasksSolutionService.findMany({
      where: {
        physicTask: {
          id,
        },
      },
    });
  }
}
