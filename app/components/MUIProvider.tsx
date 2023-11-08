"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../global.css";

interface LayoutProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#D04EC4",
    },
  },
  typography: {
    fontFamily: "Inter",
    button: {
      textTransform: "none",
    },
    h1: { fontSize: 16, fontWeight: 700 },
    h2: { fontSize: 18, fontWeight: 600 },
    h3: { fontSize: 22, fontWeight: 500 },
    h4: { fontSize: 12, fontWeight: 400 },
  },
});

export default function MUIProvider(props: LayoutProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </>
  );
}
