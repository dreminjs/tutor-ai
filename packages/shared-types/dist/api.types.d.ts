export interface IAPIResponse<T> {
    data: T;
}
export interface IWithPagination<T> {
    total: number;
    items: T[];
}
export interface IPaginationQueryParameters {
    skip: number;
    take: number;
}
//# sourceMappingURL=api.types.d.ts.map