import { Link } from "react-router";
import type { Task } from "@prisma/client";
import type { FC } from "react";

type TProps = Task;

export const TaskItem: FC<TProps> = ({ title, id }) => {
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
};
