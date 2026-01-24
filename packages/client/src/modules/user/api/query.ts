import { useQuery } from "@tanstack/react-query";
import { findMe } from "./service";
import { API_KEYS, SERVICE_KEYS } from "@/shared";

export const useGetMe = () => {
  return useQuery({
    queryFn: () => findMe(),
    queryKey: [API_KEYS.users, SERVICE_KEYS.me],
  });
};
