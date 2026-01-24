import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "./service";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
