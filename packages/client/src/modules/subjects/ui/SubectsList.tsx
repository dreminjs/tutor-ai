import type { Subject } from "@prisma/client";
import type { FC } from "react";
import { SubjectItem } from "./SubjectItem";

interface IProps {
  items: Subject[];
}

export const SubjectsList: FC<IProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <SubjectItem {...item} />
      ))}
    </ul>
  );
};
