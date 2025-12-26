import type { Section } from "@prisma/client";
import type { FC } from "react";
import { SectionItem } from "./SectionItem";

interface IProps {
  items: Section[];
}

export const SectionsList: FC<IProps> = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map((el) => (
        <SectionItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
