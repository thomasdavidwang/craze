import Box from "@mui/material/Box";
import Header from "./components/header";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Box
        position="fixed"
        sx={{
          zIndex: "modal",
          bottom: 10,
          py: 1,
          px: 10,
          width: 1,
        }}
      >
        <Link href="/create">
          <Typography
            fontWeight="bold"
            align="center"
            sx={{ bgcolor: "secondary.main", borderRadius: "9999px", p: 2 }}
          >
            Dare a friend 😈
          </Typography>
        </Link>
      </Box>
    </>
  );
}
