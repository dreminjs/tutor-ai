import { useLocation } from "react-router";
import { useGetTasks } from "../../api/queries";
import { TasksList } from "./TasksList";

export const Tasks = () => {
 
  const location = useLocation()
 
  const { data } = useGetTasks(location.pathname.split("/")[4]);

  return (
    <div>
      <TasksList items={data?.items || []} />
    </div>
  );
};
