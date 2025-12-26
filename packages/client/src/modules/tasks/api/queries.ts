import { useMutation, useQuery } from "@tanstack/react-query";
import {
  findMany,
  findManyTaskSolution,
  findOne,
  makeQuestion,
} from "./services";
import {
  closeQuestionModalAtom,
  currentExplanationAtom,
  currentTaskAtom,
  questionStore,
  readyQuestionsAtom,
} from "../model/store/question.store";
import { useAtomValue, useSetAtom } from "jotai";
import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { useEffect } from "react";
import { generateReadyQuestionPromt } from "../model/helpers/generate-ready-question-promt";
import type { TCreateQuestionClientDto } from "../model/interfaces/create-question.interface";
import { addContenxt } from "../model/helpers/addContext";

export const useMakeQuestion = () => {
  const setCurrentExplanation = useSetAtom(currentExplanationAtom, {
    store: questionStore,
  });
  const closeQuestionModal = useSetAtom(closeQuestionModalAtom, {
    store: questionStore,
  });
  const currentTask = useAtomValue(currentTaskAtom, { store: questionStore });

  return useMutation({
    mutationFn: (dto: TCreateQuestionClientDto) =>
      makeQuestion({
        file: dto.file || undefined,
        content: addContenxt(dto.content, currentTask!),
      }),
    onSuccess: (data) => {
      closeQuestionModal();
      setCurrentExplanation(data.data.content || null);
    },
  });
};

export const useMakeReadyQuestions = () => {
  const setReadyQuestions = useSetAtom(readyQuestionsAtom, {
    store: questionStore,
  });
  const currentTask = useAtomValue(currentTaskAtom, { store: questionStore });

  return useMutation({
    mutationFn: (file: File) =>
      makeQuestion({
        file,
        content: generateReadyQuestionPromt(currentTask!),
      }),
    onSuccess: (data) => {
      if (data.data.content)
        setReadyQuestions([
          "Обьясни подробнее",
          ...(data.data.content?.split(",") || []),
        ]);
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
  const setCurrentTask = useSetAtom(currentTaskAtom, { store: questionStore });

  const response = useQuery({
    queryKey: [API_KEYS.tasks, taskId],
    queryFn: () => findOne(taskId),
  });

  useEffect(() => {
    if (response.data?.data.content) {
      setCurrentTask(response.data.data.content);
    }
  }, [response.data, setCurrentTask]);
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
