import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

export const Files = createParamDecorator(
  (
    _data: unknown,
    ctx: ExecutionContext,
  ): null | Record<string, Storage.MultipartFile[]> => {
    const req = ctx.switchToHttp().getRequest() as FastifyRequest;
    return req.storedFiles;
  },
);
