import type { AuthDto } from "@tutor-ai/shared-types";
import { useRegister } from "../api/query";
import { AuthForm } from "./AuthForm";
import { AuthPageLayout } from "./AuthPageLayout";

export const RegisterPage = () => {
  const { mutate } = useRegister();

  const handleSubmit = (dto: AuthDto) => {
    mutate(dto);
  };

  return (
    <AuthPageLayout>
      <AuthForm onSubmit={handleSubmit} />
    </AuthPageLayout>
  );
};
