import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createPhysicTaskSchema = z.object({
  content: z.string(),
  sectionId: z.string(),
  answer: z.string(),
});

export type TCreatePhysincTaskDto = z.infer<typeof createPhysicTaskSchema>;

export class CreatePhysicTaskDto extends createZodDto(createPhysicTaskSchema) {}
