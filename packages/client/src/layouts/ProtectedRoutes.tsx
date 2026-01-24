import { useGetMe } from "@/modules/user/api/query";
import { PAGE_KEYS } from "@/shared";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const ProtectedRoutes = () => {
  const { data: me, isError } = useGetMe();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate(PAGE_KEYS.register);
    }
  }, [isError]);

  return (
    <>
      <Outlet />
    </>
  );
};
