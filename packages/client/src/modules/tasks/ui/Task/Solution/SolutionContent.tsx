import clsx from "clsx";
import type { FC } from "react";
import { SolutionBlock } from "./SolutionBlock";
import { useLocation } from "react-router";
import { useGetTaskSolution } from "@/modules/tasks/api/queries";

interface IProps {
  isOpen: boolean;
}

export const SolutionContent: FC<IProps> = ({ isOpen }) => {
  const { pathname } = useLocation();

  const { data } = useGetTaskSolution(pathname.split("/")[6]);

  return (
    <ul className={clsx(isOpen ? "block" : "hidden")}>
      {data
        ?.sort((a, b) => a.index - b.index)
        .map((el) => (
          <SolutionBlock key={el.id} content={el.content} />
        ))}
    </ul>
  );
};
