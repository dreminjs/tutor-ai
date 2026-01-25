import type { AuthDto } from "@tutor-ai/shared-types";
import type { FC } from "react";
import type { UseFormRegister } from "react-hook-form";

interface IProps {
  label: string;
  error?: string;
  register: UseFormRegister<AuthDto>;
  name: keyof AuthDto;
  placeholder: string;
}

export const AuthFormField: FC<IProps> = ({
  label,
  name,
  error,
  register,
  placeholder,
}) => {
  return (
    <div className="mb-2">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="block outline-none border-b-2"
        {...register(name)}
        id={name}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </div>
  );
};
