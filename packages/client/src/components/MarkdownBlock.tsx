import clsx from "clsx";
import type { FC } from "react";
import Markdown from "react-markdown";
import "katex/dist/katex.min.css";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface IProps {
  className?: string;
  content: string;
}

export const MarkdownBlock: FC<IProps> = ({ className, content }) => {
  return (
    <div className={`${clsx(className)}`}>
      <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </Markdown>
    </div>
  );
};
