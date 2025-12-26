import type { FC } from "react";
import { MarkdownBlock } from "@/components/MarkdownBlock";

interface IProps {
  content: string;
  onClick: (question: string) => void
} 

export const ReadyQuestion: FC<IProps> = ({ content, onClick }) => {
  return (
    <li onClick={() => onClick(content)} className="border-2 px-2 cursor-pointer">
     <MarkdownBlock content={content} />
    </li>
  );
};
