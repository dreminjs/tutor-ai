import { useMakeQuestion } from "@/modules/tasks/api/queries";
import { useState } from "react";

export const QuestionInput = () => {
  const [inputValue, setInputValue] = useState("");

  const { mutate } = useMakeQuestion();
  
  return (
    <div className="flex items-center gap-2">
      <input
        className="border-b-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Воспрос..."
      />
      <button
        className="border-2 p-1 rounded-lg"
        onClick={() => mutate({ content: inputValue })}
      >
        Send
      </button>
    </div>
  );
};
