import { Solution } from "./Solution";
import { Explanation } from "./Explanation/Explantion";
import { TaskProvider } from "./TasksProvider";
import { Task } from "./Task";

export const TaskPage = () => {
  return (
    <TaskProvider>
      <div>
        <Task />
        <Solution />
        <Explanation />
      </div>
    </TaskProvider>
  );
};
