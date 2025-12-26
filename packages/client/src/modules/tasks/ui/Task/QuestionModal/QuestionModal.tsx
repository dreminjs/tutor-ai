import { Dialog, DialogContent } from "@/components/ui/dialog";
import { currentQuestionScreenShotURLAtom } from "@/modules/tasks/model/store/question.store";
import { useAtomValue } from "jotai";

export const QuestionModal = () => {
  const currentQuestionScreenShotURL = useAtomValue(
    currentQuestionScreenShotURLAtom
  );

  return (
    <Dialog open={Boolean(currentQuestionScreenShotURL)}>
      <DialogContent>
        <img
          src={currentQuestionScreenShotURL || undefined}
          alt="question photo"
        />
      </DialogContent>
    </Dialog>
  );
};
