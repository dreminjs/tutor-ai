import type { FC } from "react";

interface IProps {
  onToggleVisibilty: () => void;
  isOpen: boolean;
}

export const SolutionPanel: FC<IProps> = ({ onToggleVisibilty, isOpen }) => {
  return (
    <div>
      <button onClick={onToggleVisibilty}>
        {!isOpen ? "Показать решение" : "Скрыть решение"}
      </button>
    </div>
  );
};
