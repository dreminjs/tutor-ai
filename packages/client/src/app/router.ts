import { createBrowserRouter } from "react-router";
import { ParagraphPage } from "../modules/paragraph";
import { TaskPage } from "../modules/task";
import { BaseLayout } from "../layouts/BaseLayuot";

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      { path: "/", Component: ParagraphPage },
      { path: "/task", Component: TaskPage },
    ],
  },
]);
