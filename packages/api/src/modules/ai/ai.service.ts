import type { AIResponse } from '@tutor-ai/shared-types';
import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';

@Injectable()
export class AiService {
  private ai: Groq = new Groq({
    apiKey: process.env.AI_API_KEY,
  });

  async makeQuestion(content: string): Promise<AIResponse> {
    return (
      await this.ai.chat.completions.create({
        messages: [
          {
            content: `${content} ---  Уравнения сил**  
- Сила трения:  
  $F_{\text{тр}} = mu N = mu m g$
- Центростремительная сила:  
  $F_c = \frac{m v^2}{R}$ вот тебе пример какой мне нужен маркдаун`,
            role: 'user',
          },
        ],
        model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
      })
    ).choices[0].message;
  }
}
