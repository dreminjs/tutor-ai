import z from "zod";
export declare const taskQuerySchema: z.ZodObject<{
    skip: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
} & {
    sectionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    skip: number;
    take: number;
    sectionId: string;
}, {
    sectionId: string;
    skip?: number | undefined;
    take?: number | undefined;
}>;
//# sourceMappingURL=tasks.types.d.ts.map