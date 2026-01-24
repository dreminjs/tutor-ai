import { z } from "zod";

export const AuthDtoSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nickname must be at least 3 characters long" })
    .max(100, { message: "Nickname must be at most 100 characters long" })
    .trim(),

  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /\d/.test(password), {
      message: "Password must contain at least one number",
    }),
});

export type AuthDto = z.infer<typeof AuthDtoSchema>;
