import { Solution } from "./Solution";
import { Explanation } from "./Explanation/Explantion";
import { TaskProvider } from "./TasksProvider";
import { TaskContent } from "./TaskContent";
import { useLocation } from "react-router";
import { useGetTask } from "../../api/queries";
import { QuestionModal } from "./QuestionModal/QuestionModal";

export const TaskPage = () => {
  const { pathname } = useLocation();

  const { data } = useGetTask(pathname.split("/")[6]);

  return (
    <TaskProvider>
      <div>
        <TaskContent
          schemaUrl={data?.schemaName || ""}
          content={data?.content || ""}
        />

        <Solution />
      </div>
      <Explanation />
      <QuestionModal />
    </TaskProvider>
  );
};
