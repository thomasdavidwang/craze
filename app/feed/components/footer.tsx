import { Box, Fab, Snackbar } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Fab disableRipple variant="extended">
      <Link href="/create">Dare a friend 😈</Link>
    </Fab>
  );
}
