import clsx from "clsx";
import type { FC, ReactNode } from "react";
import Markdown from "react-markdown";

interface IProps {
  className?: string;
  children: ReactNode;
}

export const MarkdownBlock: FC<IProps> = ({ className, children }) => {
  return (
    <div className={clsx(className)}>
      <Markdown>{children?.toString()}</Markdown>
    </div>
  );
};
