import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AiService } from './ai.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import { createQuestionDtoSchema } from './dto/create-question.dto';
import type { TCreateQuestionDto } from './dto/create-question.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @UsePipes(new ZodValidationPipe(createQuestionDtoSchema))
  @Post('make-question')
  public async makeQuestion(@Body() dto: TCreateQuestionDto) {
    return this.aiService.makeQuestion(dto.content);
  }
}
