import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createPhysicSectionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

export type TCreatePhysicSectionDto = z.infer<typeof createPhysicSectionSchema>;

export class CreatePhysicSectionDto extends createZodDto(
  createPhysicSectionSchema,
) {}
