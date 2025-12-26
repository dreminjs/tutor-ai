import type { FC } from "react";
import { MarkdownBlock } from "@/components/MarkdownBlock";

interface IProps {
  content: string;
}

export const SolutionBlock: FC<IProps> = ({ content }) => {
  return (
    <li className="hover:border-gray-50 w-fit relative">
      <MarkdownBlock className="max-w-[750px]" content={content} />
    </li>
  );
};
