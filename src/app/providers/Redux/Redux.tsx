import { ReactNode } from "react"
import { Provider } from "react-redux"
import { storeRedux } from "../../../store/storeRedux"

interface IReduxProvirer {
  children: ReactNode
}

export function ReduxProvider({ children }: IReduxProvirer) {
  return (
    <Provider store={storeRedux}>
      {children}
    </Provider>
  )
}
