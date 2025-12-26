import { createQuestionBaseDtoSchema } from '@tutor-ai/shared-types';
import { createZodDto } from 'nestjs-zod';

export class СreateQuestionDto extends createZodDto(
  createQuestionBaseDtoSchema,
) {}
