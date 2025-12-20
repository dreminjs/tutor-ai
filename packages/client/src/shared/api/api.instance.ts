import { BASE_API_URL } from "../model/constants";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

let retryCount = 0;

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 ||
      (error.config && !error.config._isRetry && retryCount < 2)
    ) {
      originalRequest._isRetry = true;
      retryCount += 1;
      try {
        return instance.get("tokens");
      } catch (error: any) {
        console.log(error);
      }
    }

    throw error;
  }
);
