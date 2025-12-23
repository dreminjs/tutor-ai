import { Provider } from "jotai"
import type { FC, PropsWithChildren } from "react"
import { questionStore } from "../../model/store/question.store"


export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {

    return (
        <Provider store={questionStore}>
            {children}
        </Provider>
    )
}