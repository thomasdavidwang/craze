import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AWSProvider from "./components/AWSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craze",
  description: "Dares",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AWSProvider>
        <body className={inter.className}>{children}</body>
      </AWSProvider>
    </html>
  );
}
