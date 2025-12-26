import { PAGE_KEYS } from "@/shared";
import type { Subject } from "@prisma/client";
import type { FC } from "react";
import { Link } from "react-router";

type TProps = Subject;

export const SubjectItem: FC<TProps> = ({ title, id }) => {
  return (
    <li>
      <Link to={`${id}/${PAGE_KEYS.sections}`}>{title}</Link>
    </li>
  );
};
