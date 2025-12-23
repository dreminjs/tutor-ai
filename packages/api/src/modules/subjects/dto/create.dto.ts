import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createSubjectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

export type TCreateSubjectDto = z.infer<typeof createSubjectSchema>;

export class CreateSubjectDto extends createZodDto(createSubjectSchema) {}
