
import { atom, createStore } from "jotai"

export const questionStore = createStore()

export const currentQuestionAtom = atom("")

export const currentExplanationAtom = atom("")

questionStore.set(currentQuestionAtom, "")

questionStore.set(currentExplanationAtom, "")