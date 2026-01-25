import { Outlet } from "react-router";
import { ApiProvider } from "../providers/ApiProvider";
import { Header } from "@/components/Header";

export const BaseLayout = () => (
  <ApiProvider>
    <div className="mx-auto max-w-[1120px] px-[10px] py-[5px]">
      <Header />
      <Outlet />
    </div>
  </ApiProvider>
);
