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
export declare const saveTaskSchema: z.ZodObject<{
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
}, {
    content: string;
}>;
export type TSaveTaskDto = z.infer<typeof saveTaskSchema>;
//# sourceMappingURL=tasks.types.d.ts.map