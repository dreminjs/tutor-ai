"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTaskSchema = exports.taskQuerySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const api_types_1 = require("./api.types");
exports.taskQuerySchema = api_types_1.paginationQuerySchema.extend({
    sectionId: zod_1.default.string(),
});
exports.saveTaskSchema = zod_1.default.object({
    content: zod_1.default.string(),
});
