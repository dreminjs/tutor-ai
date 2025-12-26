import { readyQuestionsAtom } from "@/modules/tasks/model/store/question.store";
import { useAtomValue } from "jotai";
import { ReadyQuestion } from "./ReadyQuestion";
import { useMakeQuestion } from "@/modules/tasks/api/queries";

export const ReadyQuestions = () => {
  const questions = useAtomValue(readyQuestionsAtom);

  const { mutate } = useMakeQuestion();
  return (
    <ul className="flex gap-[5px] flex-wrap">
      {questions.map((el, idx) => (
        <ReadyQuestion
          onClick={(question) => mutate({ content: question })}
          key={idx}
          content={el}
        />
      ))}
    </ul>
  );
};
