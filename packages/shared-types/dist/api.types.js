"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationQuerySchema = void 0;
const zod_1 = require("zod");
exports.paginationQuerySchema = zod_1.z.object({
    skip: zod_1.z.coerce.number().int().min(0).default(0),
    take: zod_1.z.coerce.number().int().min(1).max(100).default(10),
});
