import Box from "@mui/material/Box";
import Header from "./components/header";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
