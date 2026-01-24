import type { FC } from "react";

interface IProps {
  onToggleVisibilty: () => void;
  isOpen: boolean;
}

export const SolutionPanel: FC<IProps> = ({ onToggleVisibilty, isOpen }) => {
  return (
    <>
      <button
        className="border-2 p-2 rounded-lg mb-2 block"
        onClick={onToggleVisibilty}
      >
        {!isOpen ? "Показать решение" : "Скрыть решение"}
      </button>
    </>
  );
};
