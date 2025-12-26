import { Outlet } from "react-router";
import { useGetSubjectSections } from "../api/queries";
import { Sections } from "./Sections";

export const SectionsPage = () => {


  return <div>
    <Sections />
    <Outlet />
  </div>;
};
