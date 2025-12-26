import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  closeQuestionModalAtom,
  currentQuestionScreenShotURLAtom,
  isQuestionModelOpenAtom,
} from "@/modules/tasks/model/store/question.store";
import { useAtomValue, useSetAtom } from "jotai";
import { ReadyQuestions } from "./ReadyQuestions/ReadyQuestions";
import { QuestionInput } from "./QuestionInput";

export const QuestionModal = () => {
  const currentQuestionScreenShotURL = useAtomValue(
    currentQuestionScreenShotURLAtom
  );
  const closeQuestionModal = useSetAtom(closeQuestionModalAtom);
  const isQuestionModelOpen = useAtomValue(isQuestionModelOpenAtom);
  return (
    <Dialog
      onOpenChange={() => closeQuestionModal()}
      open={isQuestionModelOpen}
    >
      <DialogContent>
        <img
          src={currentQuestionScreenShotURL || undefined}
          alt="question photo"
        />
        <ReadyQuestions />
        <QuestionInput />
      </DialogContent>
    </Dialog>
  );
};
