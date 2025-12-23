import { createQuestionDtoSchema } from '@tutor-ai/shared-types';
import { createZodDto } from 'nestjs-zod';

export class СreateQuestioDto extends createZodDto(createQuestionDtoSchema) {}
