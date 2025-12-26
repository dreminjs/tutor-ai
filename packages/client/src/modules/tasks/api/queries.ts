import { useMutation, useQuery } from "@tanstack/react-query";
import { findMany, findManyTaskSolution, findOne, makeQuestion } from "./services";
import { currentExplanationAtom } from "../model/store/question.store";
import { useSetAtom } from "jotai";
import { API_KEYS, SERVICE_KEYS } from "@/shared";
import type { TCreateQuestionClientDto } from "../model/interfaces/create-question.interface";

export const useMakeQuestion = () => {
  const setCurrentExplanation = useSetAtom(currentExplanationAtom);

  return useMutation({
    mutationFn: (dto: TCreateQuestionClientDto) => makeQuestion(dto),
    onSuccess: (data) => {
      setCurrentExplanation(data.data.content);
    },
  });
};

export const useGetTasks = (sectionId?: string) => {
  const response = useQuery({
    queryKey: [API_KEYS.tasks, API_KEYS.sections, sectionId],
    queryFn: () => findMany(sectionId),
  });

  return {
    ...response,
    data: response.data?.data,
  };
};

export const useGetTask = (taskId?: string) => {
  const response = useQuery({
    queryKey: [API_KEYS.tasks, taskId],
    queryFn: () => findOne(taskId),
  });

  return {
    ...response,
    data: response.data?.data,
  };
};

export const useGetTaskSolution = (taskId?: string) => {
  const response = useQuery({
    queryKey: [API_KEYS.tasks, taskId, SERVICE_KEYS.solution],
    queryFn: () => findManyTaskSolution(taskId),
  });

  return {
    ...response,
    data: response.data?.data,
  };
};
