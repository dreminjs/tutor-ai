import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { СreateQuestionDto } from './dto/create-question.dto';
import { AiService } from './ai.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { MultipartInterceptor } from 'src/interceptors/multipart.interceptor';
import { Files } from 'src/decorators/file.decorator';
import { AIResponse } from '@tutor-ai/shared-types';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

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
  @Post('make-question')
  public async makeQuestion(
    @Body() dto: СreateQuestionDto,
    @Files() files: Record<string, Storage.MultipartFile[]>,
  ): Promise<AIResponse> {
    return await this.aiService.makeQuestion(dto.content, files.file[0]);
  }
}
