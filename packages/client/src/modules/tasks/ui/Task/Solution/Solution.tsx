import { useState } from "react";
import { SolutionPanel } from "./SolutionPanel";
import { SolutionContent } from "./SolutionContent";

export const Solution = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <SolutionPanel onToggleVisibilty={handleToggleIsOpen} isOpen={isOpen} />
      <SolutionContent isOpen={isOpen} />
    </>
  );
};
