"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDtoSchema = void 0;
const zod_1 = require("zod");
exports.AuthDtoSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(3, { message: "Nickname must be at least 3 characters long" })
        .max(100, { message: "Nickname must be at most 100 characters long" })
        .trim(),
    password: zod_1.z
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
