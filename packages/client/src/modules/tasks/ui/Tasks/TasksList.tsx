import type { Task } from "@prisma/client";
import type { FC } from "react";
import { TaskItem } from "./TaskItem";

interface IProps {
  items: Task[];
}

export const TasksList: FC<IProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TaskItem {...item} key={item.id} />
      ))}
    </ul>
  );
};
