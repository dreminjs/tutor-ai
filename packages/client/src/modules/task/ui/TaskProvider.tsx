import { Provider } from "jotai"
import { questionStore } from "../model/store/question.store"
import type { FC, PropsWithChildren } from "react"


export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {

    return (
        <Provider store={questionStore}>
            {children}
        </Provider>
    )
}