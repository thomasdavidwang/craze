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
  },
  typography: {
    fontFamily: "Inter",
    h1: { fontSize: 16, fontWeight: 700 },
    h2: { fontSize: 16, fontWeight: 600 },
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
