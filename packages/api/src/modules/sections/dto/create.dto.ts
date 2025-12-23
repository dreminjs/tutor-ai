import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const createSectionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

export type TCreateSectionDto = z.infer<typeof createSectionSchema>;

export class CreateSectionDto extends createZodDto(createSectionSchema) {}
