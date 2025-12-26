import { z } from "zod";

export interface IAPIResponse<T> {
  data: T;
}

export interface IWithPagination<T> {
  total: number;
  items: T[];
}

export const paginationQuerySchema = z.object({
  skip: z.coerce.number().int().min(0).default(0),
  take: z.coerce.number().int().min(1).max(100).default(10),
});

export type TPaginationQuery = z.infer<typeof paginationQuerySchema>;
