import z from "zod";

import { createQuestionDtoSchema } from "./ai.dto";

export interface AIResponse {
  content: string | null;
  role: string;
}

export type TCreateQuestionDto = z.infer<typeof createQuestionDtoSchema>;
