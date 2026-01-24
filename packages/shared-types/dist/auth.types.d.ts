import { z } from "zod";
export declare const AuthDtoSchema: z.ZodObject<{
    name: z.ZodString;
    password: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, string, string>;
}, "strip", z.ZodTypeAny, {
    name: string;
    password: string;
}, {
    name: string;
    password: string;
}>;
export type AuthDto = z.infer<typeof AuthDtoSchema>;
//# sourceMappingURL=auth.types.d.ts.map