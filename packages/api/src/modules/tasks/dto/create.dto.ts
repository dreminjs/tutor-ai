import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createTaskSchema = z.object({
  content: z.string(),
  sectionId: z.string(),
  answer: z.string(),
});

export type TCreateTaskDto = z.infer<typeof createTaskSchema>;

export class CreateTaskDto extends createZodDto(createTaskSchema) {}
