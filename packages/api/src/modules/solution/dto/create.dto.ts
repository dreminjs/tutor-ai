import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createSolutionSchema = z.object({
  content: z.string(),
  index: z.number(),
});

export type TCreateSolutionDto = z.infer<typeof createSolutionSchema>;

export class CreatePhysicTaskSolutionDto extends createZodDto(
  createSolutionSchema,
) {}
