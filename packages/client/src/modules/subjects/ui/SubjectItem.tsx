import { PAGE_KEYS } from "@/shared";
import { Link } from "react-router";
import type { FC } from "react";
import type { Subject } from "@prisma/client";

type TProps = Subject;

export const SubjectItem: FC<TProps> = ({ title, id }) => {
  return (
    <li>
      <Link to={`${id}/${PAGE_KEYS.sections}`}>{title}</Link>
    </li>
  );
};
