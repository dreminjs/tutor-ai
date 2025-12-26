import { MarkdownBlock } from "@/components/MarkdownBlock";
import type { FC } from "react";

interface IProps {
  content: string;
}

export const TaskContent: FC<IProps> = ({ content }) => {
  return (
    <div className="flex flex-wrap">
      <MarkdownBlock content={content} className="mb-[10px] text-wrap" />
      <img
        className="h-[350px] max-w-[450px] block"
        src="/task-img.png"
        alt=""
      />
    </div>
  );
};
