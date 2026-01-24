import { useState } from "react";
import { SolutionPanel } from "./SolutionPanel";
import { SolutionContent } from "./SolutionContent";
import { AreaScreenshotQuestion } from "../AreaScreenshotQuestion";

export const Solution = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState(false);

  const handleToggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isOpen && (
        <button
          className="border-2 p-2 rounded-lg mb-2"
          onClick={() => setActive(true)}
        >
          Включить режим выделения
        </button>
      )}

      <SolutionPanel onToggleVisibilty={handleToggleIsOpen} isOpen={isOpen} />
      <SolutionContent isOpen={isOpen} />
      {active && (
        <AreaScreenshotQuestion
          onFinish={() => setActive(false)}
          content={"мне не понятно"}
        />
      )}
    </>
  );
};
