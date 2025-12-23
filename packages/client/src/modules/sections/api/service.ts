import { instance } from "@/shared/api/api.instance";
import { useLocation } from "react-router";
import type { IAPIResponse, ISection } from "@tutor-ai/shared-types";

export const findMany = (): Promise<IAPIResponse<ISection[]>> => {
  const { pathname } = useLocation();

  return instance.get(pathname);
};
