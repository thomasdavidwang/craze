import { Box, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function SignUpModal({ open, setOpen }) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        sx={{
          width: 350,
          height: 300,
          bgcolor: "white",
          borderRadius: "25px",
          color: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src="/nerve-logo.png"
          alt="Nerve's Logo"
          width={100}
          height={100}
        />
        <Typography variant="h2">Sign in to dare a friend 😈</Typography>
        <Box
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: "9999px",
            fontWeight: "bold",
            px: 10,
            py: 2,
          }}
        >
          <Link href="/signup">Sign in</Link>
        </Box>
      </Grid>
    </Modal>
  );
}
