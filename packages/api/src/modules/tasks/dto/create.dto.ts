import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createTaskSchema = z.object({
  title: z.string(),
  content: z.string(),
  sectionId: z.string(),
  answer: z.string(),
  subjectId: z.string(),
});

export const saveTaskSchema = z.object({
  content: z.string(),
});

export type TSaveTaskDto = z.infer<typeof saveTaskSchema>;

export type TCreateTaskDto = z.infer<typeof createTaskSchema>;

export class CreateTaskDto extends createZodDto(createTaskSchema) {}

export class SaveTaskDto extends createZodDto(saveTaskSchema) {}
