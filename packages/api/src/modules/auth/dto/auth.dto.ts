import { AuthDtoSchema } from '@tutor-ai/shared-types';
import { createZodDto } from 'nestjs-zod';

export class AuthDto extends createZodDto(AuthDtoSchema) {}
