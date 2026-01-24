import clsx from "clsx";
import Markdown from "react-markdown";
import "katex/dist/katex.min.css";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { FC } from "react";

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
