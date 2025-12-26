import { Solution } from "./Solution";
import { Explanation } from "./Explanation/Explantion";
import { TaskProvider } from "./TasksProvider";
import { TaskContent } from "./TaskContent";
import { useState } from "react";
import { AreaScreenshotQuestion } from "./AreaScreenshotQuestion";
import { useLocation } from "react-router";
import { useGetTask } from "../../api/queries";
import { QuestionModal } from "./QuestionModal/QuestionModal";

export const TaskPage = () => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const { data } = useGetTask(pathname.split("/")[6]);
  
  return (
    <TaskProvider>
      <div>
        <TaskContent
          schemaUrl={data?.schemaName || ""}
          content={data?.content || ""}
        />
        <button onClick={() => setActive(true)}>
          Включить режим выделения
        </button>
        <Solution />

        {active && (
          <AreaScreenshotQuestion
            onFinish={() => setActive(false)}
            content={"мне не понятно"}
          />
        )}
      </div>
      <Explanation />
      <QuestionModal />
    </TaskProvider>
  );
};
