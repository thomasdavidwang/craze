import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AWSProvider from "./components/AWSProvider";
import ContextProvider from "./components/ContextProvider";

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
        <ContextProvider>
          <body className={inter.className}>{children}</body>
        </ContextProvider>
      </AWSProvider>
    </html>
  );
}
