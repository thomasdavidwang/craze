"use client";

import Link from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <Container sx={{ width: 1, my: 2 }}>
      <Stack spacing={2} alignItems="center">
        <Link
          href="/feed"
          className="text-base font-bold no-underline text-white"
        >
          Nerve @ Yale
        </Link>
      </Stack>
    </Container>
  );
}
