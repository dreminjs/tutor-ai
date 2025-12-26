import { API_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type {
  IAPIResponse,
  IWithPagination,
  FindManySectionsQuery,
} from "@tutor-ai/shared-types";
import type { Section } from "@prisma/client";

export const findMany = async (
  dto: FindManySectionsQuery
): Promise<IAPIResponse<IWithPagination<Section>>> => {
  const query = new URLSearchParams();

  if (dto!.subjectId) query.append("subjectId", dto.subjectId);

  return (await instance.get(`${API_KEYS.sections}?${query.toString()}`)).data;
};
