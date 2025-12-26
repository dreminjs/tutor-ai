import { MarkdownBlock } from "@/components/MarkdownBlock";
import type { FC } from "react";

interface IProps {
  content: string;
  schemaUrl: string;
}

export const TaskContent: FC<IProps> = ({ content, schemaUrl }) => {
  return (
    <div className="flex flex-wrap">
      <MarkdownBlock content={content} className="mb-[10px] text-wrap" />
      <img
        className="h-[350px] max-w-[450px] block"
        src={`http://localhost:9001/api/v1/buckets/index/objects/download?preview=true&prefix=${schemaUrl}&version_id=null`}
        alt=""
      />
    </div>
  );
};
