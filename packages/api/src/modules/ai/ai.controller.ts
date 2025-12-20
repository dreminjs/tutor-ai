import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AiService } from './ai.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import type { AIResponse, TCreateQuestionDto } from '@tutor-ai/shared-types';
import { createQuestionDtoSchema } from '@tutor-ai/shared-types';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @UsePipes(new ZodValidationPipe(createQuestionDtoSchema))
  @Post('make-question')
  public async makeQuestion(
    @Body() dto: TCreateQuestionDto,
  ): Promise<AIResponse> {
    return await this.aiService.makeQuestion(dto.content);
  }
}
