import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#77B5AA",
    },
    background: {
      default: "#06070A",
    },
    text: {
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
  typography,
});

export default theme;
