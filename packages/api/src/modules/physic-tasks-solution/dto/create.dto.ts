import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createPhysicTaskSolutionSchema = z.object({
  content: z.string(),
  index: z.number(),
});

export type TCreatePhysincTaskSolutionDto = z.infer<
  typeof createPhysicTaskSolutionSchema
>;

export class CreatePhysicTaskSolutionDto extends createZodDto(
  createPhysicTaskSolutionSchema,
) {}
