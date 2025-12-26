import { API_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type { Subject } from "@prisma/client";
import type {
  IAPIResponse,
  IWithPagination,
  TPaginationQuery,
} from "@tutor-ai/shared-types";

export const findMany = async (
  dto: TPaginationQuery
): Promise<IAPIResponse<IWithPagination<Subject>>> => {
  const query = new URLSearchParams();

  Object.entries(dto).forEach(([key, value]) => {
    query.append(key, String(value));
  });

  return (await instance.get(`${API_KEYS.subjects}?${query.toString()}`)).data;
};
