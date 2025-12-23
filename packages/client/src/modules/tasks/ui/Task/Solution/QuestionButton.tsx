import { CircleQuestionMark } from "lucide-react";
import type { FC } from "react";
import { useMakeQuestion } from "../../../api/queries";

interface IProps {
  content: string;
}

export const QuestionButton: FC<IProps> = ({ content }) => {
  const { mutate } = useMakeQuestion();

  return (
    <button
      onClick={() => mutate({ content })}
      className="absolute right-0 top-[5px]"
    >
      <CircleQuestionMark />
    </button>
  );
};
