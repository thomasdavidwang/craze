"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface LayoutProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function MUIProvider(props: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
