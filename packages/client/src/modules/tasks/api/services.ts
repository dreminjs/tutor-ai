import { instance } from "../../../shared/api/api.instance";
import { API_KEYS, SERVICE_KEYS } from "../../../shared";
import type {
  AIResponse,
  IAPIResponse,
  IWithPagination,
} from "@tutor-ai/shared-types";
import type { Solution, Task } from "@prisma/client";
import type { TCreateQuestionClientDto } from "../model/interfaces/create-question.interface";

export const makeQuestion = async (
  dto: TCreateQuestionClientDto
): Promise<IAPIResponse<AIResponse>> => {
  const formData = new FormData();

  formData.append("content", dto.content);

  if (dto.file) {
    formData.append("file", dto.file);
  }

  return (
    await instance.post(
      `${API_KEYS.ai}/${SERVICE_KEYS["make-question"]}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
  ).data;
};

export const findMany = async (
  sectionId?: string
): Promise<IAPIResponse<IWithPagination<Task>>> => {
  const query = new URLSearchParams();

  sectionId && query.append("sectionId", sectionId);

  return (await instance.get(`${API_KEYS.tasks}?${query.toString()}`)).data;
};

export const findOne = async (taskId?: string): Promise<IAPIResponse<Task>> => {
  return (await instance.get(`${API_KEYS.tasks}/${taskId}`)).data;
};

export const findManyTaskSolution = async (
  taskId?: string
): Promise<IAPIResponse<Solution[]>> => {
  return (
    await instance.get(`${API_KEYS.tasks}/${taskId}/${SERVICE_KEYS.solution}`)
  ).data;
};
