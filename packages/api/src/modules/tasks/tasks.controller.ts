import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { ZodValidationPipe } from 'nestjs-zod';
import { createSolutionSchema } from '../solution/dto/create.dto';
import { SolutionService } from '../solution/solution.service';
import { CreateTaskDto } from './dto/create.dto';
import { TasksService } from './tasks.service';
import { CreateSolutionDto } from '../solution/dto/create.dto';
import type { IWithPagination, TPaginationQuery } from '@tutor-ai/shared-types';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly solutionService: SolutionService,
  ) {}

  @Get()
  public async findMany(
    @Query() query: TPaginationQuery,
  ): Promise<IWithPagination<Task>> {
    const countQuery = this.tasksService.count();

    const itemsQuery = this.tasksService.findMany(query);

    const [items, count] = await Promise.all([itemsQuery, countQuery]);

    return {
      items,
      total: count,
    };
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Task | null> {
    return await this.tasksService.findOne({ where: { id } });
  }

  @Post()
  public async createOne(@Body() dto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.create({
      data: {
        content: dto.content,
        title: dto.title,

        section: {
          connect: {
            id: dto.sectionId,
          },
        },
        subject: {
          connect: {
            id: dto.subjectId,
          },
        },
      },
    });
  }

  @UsePipes(new ZodValidationPipe(createSolutionSchema))
  @Post(':id/solution')
  public async createOneSolution(@Body() dto: CreateSolutionDto) {
    return await this.solutionService.createOne({
      data: {
        content: dto.content,
        index: dto.index,
        task: {
          connect: {
            id: dto.taskId,
          },
        },
      },
    });
  }

  @Get(':id/solution')
  public async findManySolutions(@Param('id') id: string) {
    return await this.solutionService.findMany({
      where: {
        task: {
          id,
        },
      },
    });
  }
}
