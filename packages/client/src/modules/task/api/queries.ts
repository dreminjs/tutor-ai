import { useMutation } from "@tanstack/react-query";
import { makeQuestion } from "./services";
import { currentExplanationAtom } from "../model/store/question.store";
import { useSetAtom } from "jotai";
import * as sharedTypes from "@tutor-ai/shared-types";

export const useMakeQuestion = () => {
  const setCurrentExplanation = useSetAtom(currentExplanationAtom);

  return useMutation({
    mutationFn: (dto: sharedTypes.TCreateQuestionDto) => makeQuestion(dto),
    onSuccess: (data) => {
      setCurrentExplanation(data.data.content);
    },
  });
};
