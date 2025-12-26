import { createBrowserRouter } from "react-router";
// import { ParagraphPage } from "../modules/paragraph";
import { BaseLayout } from "../layouts/BaseLayuot";
import { TaskPage } from "@/modules/tasks";
import { SubjectsPage } from "@/modules/subjects";
import { SectionsPage } from "@/modules/sections/ui/SectionsPage";
import { Home } from "@/modules/home";
import { TasksPage } from "@/modules/tasks/ui/Tasks/TasksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "subjects",
        Component: SubjectsPage,
      },

      {
        path: "subjects/:subjectId/sections",
        Component: SectionsPage,
      },

      {
        path: "subjects/:subjectId/sections/:sectionId/tasks",
        Component: TasksPage,
      },
      {
        path: "subjects/:subjectId/sections/:sectionId/tasks/:taskId",
        Component: TaskPage,
      },
      {
        path: "task",
        Component: TaskPage,
      },
    ],
  },
]);
