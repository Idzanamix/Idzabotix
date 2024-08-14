import { createTheme } from "@mui/material";
import { colors } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: colors.purple,
    secondary: colors.pink
  },
  typography: {
    fontFamily: [
      "Qanelas",
      "sans-serif"
    ].join(','),
  },
});

