import { instance } from "../../../shared/api/api.instance";
import { API_KEYS, SERVICE_KEYS } from "../../../shared";
import * as sharedTypes from "@tutor-ai/shared-types";

export const makeQuestion = async (dto: sharedTypes.TCreateQuestionDto) => {
  return (
    await instance.post(`${API_KEYS.ai}/${SERVICE_KEYS["make-question"]}`, {
      content: `${dto.content} - мне не понятная эта часть. обьясни`,
    })
  ).data;
};


export const findMany = () => {

  // return instance.get(`${API_KEYS.}`)
}