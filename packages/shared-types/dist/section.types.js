"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionsQuerySchema = void 0;
const api_types_1 = require("./api.types");
const zod_1 = require("zod");
exports.sectionsQuerySchema = api_types_1.paginationQuerySchema.extend({
    subjectId: zod_1.z.string(),
});
