import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type { User } from "@prisma/client";

export const findMe = async (): Promise<User | null> => {
  return (await instance.get(`${API_KEYS.users}/${SERVICE_KEYS.me}`)).data;
};
