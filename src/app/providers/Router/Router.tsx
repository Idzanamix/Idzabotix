import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { useUnmount } from "../../../hooks/useUnmount";

interface IReduxProvirer {
  children: ReactNode
}

export function MountedBrowserRouter({ children }: IReduxProvirer) {
  const [mounted] = useUnmount();

  return (
    mounted && <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}
