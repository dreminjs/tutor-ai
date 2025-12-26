import { useQuery } from "@tanstack/react-query";
import { findMany } from "./service";
import { API_KEYS } from "@/shared";
import type { TPaginationQuery } from "@tutor-ai/shared-types";

export const useGetSubjects = (dto: TPaginationQuery) => {
  const respnose = useQuery({
    queryKey: [API_KEYS.subjects],
    queryFn: () => findMany(dto),
  });

  return {
    ...respnose,
    data: respnose.data?.data
  };
};
