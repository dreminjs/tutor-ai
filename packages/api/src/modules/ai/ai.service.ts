import { Injectable, Logger } from '@nestjs/common';
import { AIResponse } from '@tutor-ai/shared-types';
import Groq from 'groq-sdk';

@Injectable()
export class AiService {
  private client: Groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  private logger = new Logger(AiService.name);

  async makeQuestion(
    content: string,
    file: Storage.MultipartFile,
  ): Promise<AIResponse> {
    const fileBase64 = file.buffer.toString('base64');
    const mimeType = fileBase64.toLowerCase().endsWith('.png')
      ? 'image/png'
      : 'image/jpeg';

    const result = await this.client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: content,
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:${mimeType};base64,${fileBase64}`,
              },
            },
          ],
        },
      ],
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
    });

    return result.choices[0].message;
  }
}
