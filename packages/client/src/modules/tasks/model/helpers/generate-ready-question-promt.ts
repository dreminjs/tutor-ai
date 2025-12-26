import { addContenxt } from "./addContext";

export const generateReadyQuestionPromt = (currentTask: string) => {
  return addContenxt(
    `дай не больше 4  вопросов которые могут возникнуть у ученика при ввиде это скриншота, вопросы сформулируй короткие, перечисленные через запятую, без дополнительных слов,чисто вопросы.`,
    currentTask
  );
};
