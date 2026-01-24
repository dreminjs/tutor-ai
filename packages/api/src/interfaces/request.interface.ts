import { FastifyRequest } from 'fastify';

export type RequestWithPromt = FastifyRequest & {
  promt: string;
};
