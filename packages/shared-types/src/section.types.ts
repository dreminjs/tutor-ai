import { paginationQuerySchema } from "./api.types";
import z from "zod";

export interface ISection {
  id: string;
  title: string;
}

export const sectionsQuerySchema = paginationQuerySchema.extend({
  subjectId: z.string(),
});
