import z from "zod";

import { createQuestionBaseDtoSchema } from "./ai.dto";

export interface AIResponse {
  content: string | null;
  role: string;
}

export type TCreateQuestionBaseDto = z.infer<typeof createQuestionBaseDtoSchema>;
