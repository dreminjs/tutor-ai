import { z } from "zod";
export interface ISection {
    id: string;
    title: string;
}
export declare const sectionsQuerySchema: z.ZodObject<{
    skip: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
} & {
    subjectId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    skip: number;
    take: number;
    subjectId: string;
}, {
    subjectId: string;
    skip?: number | undefined;
    take?: number | undefined;
}>;
//# sourceMappingURL=section.types.d.ts.map