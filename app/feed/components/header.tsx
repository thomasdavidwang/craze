"use client";

import { context } from "@/app/components/ContextProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function Header() {
  const { contextData, setContextData } = useContext(context);

  return (
    <Box>
      <Typography>Nerve</Typography>
      {contextData.firstName && (
        <>
          <Link href="/profile">{contextData.firstName}</Link>
          <Link href="/create">
            <AddIcon />
          </Link>
        </>
      )}
    </Box>
  );
}
