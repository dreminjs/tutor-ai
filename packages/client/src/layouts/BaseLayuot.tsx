
import { Outlet } from "react-router";

export const BaseLayout = () => (
    <div className="mx-auto max-w-[1120px] px-[10px] py-[5px]">
        <Outlet />
    </div>
)