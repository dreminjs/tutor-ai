import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createQuestionDtoSchema = z.object({
  content: z.string({ message: 'Обязателен вопрос' }).max(1256, {
    message: 'Максимальная длина вопроса 1256 символов',
  }),
});

export type TCreateQuestionDto = z.infer<typeof createQuestionDtoSchema>;

export class СreateQuestioDto extends createZodDto(createQuestionDtoSchema) {}
