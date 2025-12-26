import * as z from "zod";

export const createQuestionBaseDtoSchema = z.object({
  content: z.string({ message: "Обязателен вопрос" }).max(1256, {
    message: "Максимальная длина вопроса 1256 символов",
  })
});
