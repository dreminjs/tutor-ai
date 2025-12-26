import { useState } from "react";
import { useSetAtom } from "jotai";
import { currentQuestionScreenShotAtom } from "../../model/store/question.store";
import html2canvas from "html2canvas";
import { useMakeReadyQuestions } from "../../api/queries";

type Point = { x: number; y: number };
type Rect = { x: number; y: number; width: number; height: number };

export function AreaScreenshotQuestion({
  onFinish,
}: {
  content: string;
  onFinish?: () => void;
}) {
  const [start, setStart] = useState<Point | null>(null);
  const [current, setCurrent] = useState<Point | null>(null);

  const currentQuestionScreenShot = useSetAtom(currentQuestionScreenShotAtom);
  const { mutate } = useMakeReadyQuestions();
  const rect: Rect | null =
    start && current
      ? {
          x: Math.min(start.x, current.x),
          y: Math.min(start.y, current.y),
          width: Math.abs(current.x - start.x),
          height: Math.abs(current.y - start.y),
        }
      : null;

  const canvasToFile = (
    canvas: HTMLCanvasElement,
    filename = `screenshot-${Date.now()}.png`
  ): Promise<File> =>
    new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) return reject("Canvas is empty");
        resolve(new File([blob], filename, { type: "image/png" }));
      }, "image/png");
    });

  const capture = async (rect: Rect): Promise<File> => {
    const scale = window.devicePixelRatio;

    const fullCanvas = await html2canvas(document.body, {
      useCORS: true,
      scale,
      scrollX: 0,
      scrollY: -window.scrollY,
    });

    const cropped = document.createElement("canvas");
    cropped.width = rect.width * scale;
    cropped.height = rect.height * scale;

    const ctx = cropped.getContext("2d")!;
    ctx.drawImage(
      fullCanvas,
      rect.x * scale,
      rect.y * scale,
      rect.width * scale,
      rect.height * scale,
      0,
      0,
      cropped.width,
      cropped.height
    );

    return canvasToFile(cropped);
  };

  const handleFinish = async () => {
    if (!rect) return;

    try {
      const file = await capture(rect);
      mutate(file);
      currentQuestionScreenShot(file);
    } finally {
      setStart(null);
      setCurrent(null);
      onFinish?.();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        cursor: "crosshair",
        background: "rgba(0,0,0,0.25)",
      }}
      onMouseDown={(e) => {
        setStart({ x: e.clientX, y: e.clientY });
        setCurrent({ x: e.clientX, y: e.clientY });
      }}
      onMouseMove={(e) => {
        if (!start) return;
        setCurrent({ x: e.clientX, y: e.clientY });
      }}
      onMouseUp={handleFinish}
    >
      {rect && (
        <div
          style={{
            position: "absolute",
            left: rect.x,
            top: rect.y,
            width: rect.width,
            height: rect.height,
            border: "2px solid #22c55e",
            background: "rgba(34,197,94,0.2)",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
