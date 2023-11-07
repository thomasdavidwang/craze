"use client";

import { context } from "@/app/components/ContextProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";

export default function Header() {
  const { contextData, setContextData } = useContext(context);

  return (
    <Box>
      <Typography>Nerve</Typography>
      {contextData.firstName && (
        <Typography>{contextData.firstName}</Typography>
      )}
    </Box>
  );
}
