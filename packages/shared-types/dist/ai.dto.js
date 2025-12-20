"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestionDtoSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createQuestionDtoSchema = zod_1.default.object({
    content: zod_1.default.string({ message: "Обязателен вопрос" }).max(1256, {
        message: "Максимальная длина вопроса 1256 символов",
    }),
});
