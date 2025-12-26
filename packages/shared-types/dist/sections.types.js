"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionsQuerySchema = void 0;
const api_types_1 = require("./api.types");
const zod_1 = __importDefault(require("zod"));
exports.sectionsQuerySchema = api_types_1.paginationQuerySchema.extend({
    subjectId: zod_1.default.string(),
});
