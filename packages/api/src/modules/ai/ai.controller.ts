import {
  Body,
  Controller,
  Logger,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { MultipartInterceptor } from 'src/interceptors/multipart.interceptor';
import { Files } from 'src/decorators/file.decorator';
import { AIResponse } from '@tutor-ai/shared-types';
import { AiService } from './ai.service';
import { СreateQuestionDto } from './dto/create-question.dto';
import { TasksService } from '../tasks/tasks.service';
import { CurrentUser } from '../user/user.decorator';
import { AccessTokenGuard } from '../token/guards/access-token.guard';
import { generateStructuredPrompt } from './helpers/generate-promt.helper';

@Controller('ai')
export class AiController {
  constructor(
    private readonly aiService: AiService,
    private readonly tasksService: TasksService,
  ) {}

  private logger = new Logger(AiController.name);

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        content: { type: 'string', description: 'Текст вопроса' },
        file: {
          type: 'string',
          format: 'binary',
          description: 'Файл (опционально)',
        },
      },
      required: ['content'],
    },
  })
  @UseInterceptors(
    MultipartInterceptor({ fileType: 'jpeg', maxFileSize: 1000_000 }),
  )
  @UseGuards(AccessTokenGuard)
  @Post('make-question')
  public async makeQuestion(
    @Body() dto: СreateQuestionDto,
    @CurrentUser('id') userId: string,
    @Files() files?: Record<string, Storage.MultipartFile[]>,
  ): Promise<AIResponse> {
    const file = files?.file?.[0] ?? null;

    const task = await this.tasksService.getTaskFromSession(userId);

    const promt = generateStructuredPrompt(task!, dto.content);

    this.logger.log(promt);

    return await this.aiService.makeQuestion(promt, file);
  }
}
