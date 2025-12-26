import { Link } from "react-router";
import type { Section } from "@prisma/client";
import type { FC } from "react";
import { PAGE_KEYS } from "@/shared";
type TProps = Section;

export const SectionItem: FC<TProps> = ({ title, id, subjectId }) => {
  return <Link to={`${id}/${PAGE_KEYS.tasks}`}>{title}</Link>;
};
