import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type { AuthDto, IStandartResponse } from "@tutor-ai/shared-types";

export const login = async (dto: AuthDto): Promise<IStandartResponse> => {
  return (await instance.post(`${API_KEYS.auth}/${SERVICE_KEYS.login}`, dto))
    .data;
};

export const register = async (dto: AuthDto): Promise<IStandartResponse> => {
  console.log(dto);
  return (await instance.post(`${API_KEYS.auth}/${SERVICE_KEYS.register}`, dto))
    .data;
};

export const logout = async (): Promise<IStandartResponse> => {
  return (await instance.post(`${API_KEYS.auth}/${SERVICE_KEYS.logout}`)).data;
};
