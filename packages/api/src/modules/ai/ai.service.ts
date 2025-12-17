import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';

@Injectable()
export class AiService {
  private ai: Groq = new Groq({
    apiKey: process.env.AI_API_KEY,
  });

  async makeQuestion(content: string) {
    return this.ai.chat.completions.create({
      messages: [
        {
          content,
          role: 'user',
        },
      ],
      model: 'openai/gpt-oss-120b',
    });
  }
}
