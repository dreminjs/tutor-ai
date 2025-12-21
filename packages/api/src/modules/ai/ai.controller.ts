import { Body, Controller, Post } from '@nestjs/common';
import { СreateQuestioDto } from './dto/create-question.dto';
import { AiService } from './ai.service';
import type { AIResponse } from '@tutor-ai/shared-types';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('make-question')
  public async makeQuestion(
    @Body() dto: СreateQuestioDto,
  ): Promise<AIResponse> {
    return await this.aiService.makeQuestion(dto.content);
  }
}
