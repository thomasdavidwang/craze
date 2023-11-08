import { Box, Fab, Snackbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Fab disableRipple disableFocusRipple variant="extended" color="secondary">
      <Link href="/feed/create">
        <Typography fontWeight="bold">Dare a friend 😈</Typography>
      </Link>
    </Fab>
  );
}
