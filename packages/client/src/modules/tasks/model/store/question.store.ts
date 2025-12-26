import { atom, createStore } from "jotai";

export const questionStore = createStore();

export const currentQuestionScreenShotAtom = atom<File | null>(null);

export const currentExplanationAtom = atom("");

export const currentQuestionScreenShotURLAtom = atom<string | null>((get) => {
  const file = get(currentQuestionScreenShotAtom);
  if (!file) return null;

  return URL.createObjectURL(file);
});

questionStore.set(currentQuestionScreenShotAtom, null);

questionStore.set(currentExplanationAtom, "");
