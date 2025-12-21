import { MarkdownBlock } from "@/components/MarkdownBlock";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useAtom } from "jotai";
import { currentExplanationAtom } from "../../model/store/question.store";

export const Explanation = () => {
  const [currentExplanation, setCurrentExplanation] = useAtom(
    currentExplanationAtom
  );

  return (
    <Drawer
      onClose={() => setCurrentExplanation("")}
      open={Boolean(currentExplanation)}
    >
      <DrawerContent className="">
        <MarkdownBlock
          className="p-[15px] h-[550px] overflow-y-scroll"
          content={currentExplanation}
        />
      </DrawerContent>
    </Drawer>
  );
};
