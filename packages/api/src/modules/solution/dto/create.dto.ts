import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createSolutionSchema = z.object({
  content: z.string(),
  index: z.number(),
  taskId: z.string(),
});

export type TCreateSolutionDto = z.infer<typeof createSolutionSchema>;

export class CreateSolutionDto extends createZodDto(createSolutionSchema) {}
