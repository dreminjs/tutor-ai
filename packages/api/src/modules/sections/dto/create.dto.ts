import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createSectionSchema = z.object({
  title: z.string({
    message: 'Title is required',
  }),
  subjectId: z.string(),
});

export type TCreateSectionDto = z.infer<typeof createSectionSchema>;

export class CreateSectionDto extends createZodDto(createSectionSchema) {}
