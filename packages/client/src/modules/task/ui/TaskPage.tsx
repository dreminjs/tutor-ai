import { Solution } from "./Solution";
import { Task } from "./Task";
import { Explanation } from "./Explanation/Explantion";
import { TaskProvider } from "./TaskProvider";

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
