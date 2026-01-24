import type { AuthDto } from "@tutor-ai/shared-types";
import { useLogin } from "../api/query";
import { AuthForm } from "./AuthForm";
import { AuthPageLayout } from "./AuthPageLayout";

export const LoginPage = () => {
  const { mutate } = useLogin();

  const handleSubmit = (dto: AuthDto) => mutate(dto);

  return (
    <AuthPageLayout>
      <AuthForm onSubmit={handleSubmit} />
    </AuthPageLayout>
  );
};
