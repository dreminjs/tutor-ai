import { createZodDto } from 'nestjs-zod';
import { sectionsQuerySchema } from '@tutor-ai/shared-types';

export class FindManySectionsQuery extends createZodDto(sectionsQuerySchema) {}
