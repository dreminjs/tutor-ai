import { paginationQuerySchema } from '@tutor-ai/shared-types';
import { createZodDto } from 'nestjs-zod';

export class FindManyQuery extends createZodDto(paginationQuerySchema) {}
