import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#113957",
      secondary: "#bbbec2",
    },
    primary: {
      light: "#252f3e",
      main: "#1d2532",
      dark: "#1b2330",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#64e0f3",
      main: "#2196f3",
    },
  },
});

export default theme;
