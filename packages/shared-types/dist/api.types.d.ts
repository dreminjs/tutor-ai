import z from "zod";
export interface IAPIResponse<T> {
    data: T;
}
export interface IWithPagination<T> {
    total: number;
    items: T[];
}
export declare const paginationQuerySchema: z.ZodObject<{
    skip: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    skip: number;
    take: number;
}, {
    skip?: number | undefined;
    take?: number | undefined;
}>;
export type TPaginationQuery = z.infer<typeof paginationQuerySchema>;
//# sourceMappingURL=api.types.d.ts.map