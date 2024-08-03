import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./darkTheme";

interface IThemeProvider {
  children: React.ReactNode;
}

export function MuiThemeProvider({ children }: IThemeProvider) {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  )
}
