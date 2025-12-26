import type z from "zod";
import { createQuestionClientSchema } from "../schemas/create-question.schema";

export type TCreateQuestionClientDto = z.infer<
  typeof createQuestionClientSchema
>;


