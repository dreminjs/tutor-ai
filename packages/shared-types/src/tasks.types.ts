import z from "zod";
import { paginationQuerySchema } from "./api.types";

export const taskQuerySchema = paginationQuerySchema.extend({
  sectionId: z.string(),
});
