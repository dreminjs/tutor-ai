import { createQuestionBaseDtoSchema } from "@tutor-ai/shared-types";
import z from "zod";

export const createQuestionClientSchema = createQuestionBaseDtoSchema.extend({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "Макс. 5 МБ")
    .optional(),
}) 
