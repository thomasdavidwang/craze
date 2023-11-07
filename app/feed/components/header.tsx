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
      <Link href="/feed">Nerve</Link>
      {contextData.firstName && (
        <>
          <Link href="/feed/profile">{contextData.firstName}</Link>
          <Link href="/feed/create">
            <AddIcon />
          </Link>
        </>
      )}
    </Box>
  );
}
