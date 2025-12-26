import { useQuery } from "@tanstack/react-query";
import { API_KEYS } from "@/shared";
import { findMany } from "./service";
import type { FindManySectionsQuery } from "@tutor-ai/shared-types";

export const useGetSubjectSections = (dto: FindManySectionsQuery) => {
  const response = useQuery({
    queryKey: [API_KEYS.subjects, Object.values(dto)],
    queryFn: () => findMany(dto),
    refetchOnWindowFocus: false
  });

  return {
      ...response,
      data: response.data?.data,
  }
};
