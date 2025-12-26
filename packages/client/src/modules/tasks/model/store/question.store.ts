import { atom, createStore } from "jotai";

export const questionStore = createStore();

export const currentQuestionScreenShotAtom = atom<File | null>(null);

export const currentExplanationAtom = atom<string | null>(null);

export const readyQuestionsAtom = atom<string[]>([]);

export const currentTaskAtom = atom<string | null>(null);

export const closeQuestionModalAtom = atom(null, (get, set) => {
  set(currentQuestionScreenShotAtom, null);
  set(readyQuestionsAtom, []);
});

export const currentQuestionScreenShotURLAtom = atom<string | null>((get) => {
  const file = get(currentQuestionScreenShotAtom);
  if (!file) return null;

  return URL.createObjectURL(file);
});

export const isQuestionModelOpenAtom = atom((get) => {
  const readyQuestions = get(readyQuestionsAtom);
  const currentQuestionScreenShot = get(currentQuestionScreenShotAtom);

  return readyQuestions.length > 0 && Boolean(currentQuestionScreenShot);
});

questionStore.set(currentTaskAtom, null);

questionStore.set(readyQuestionsAtom, []);

questionStore.set(currentQuestionScreenShotAtom, null);

questionStore.set(currentExplanationAtom, null);

questionStore.sub(currentTaskAtom, () => console.log("Changed"))