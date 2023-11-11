import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AWSProvider from "./components/AWSProvider";
import ContextProvider from "./components/ContextProvider";
import MUIProvider from "./components/MUIProvider";

export const metadata: Metadata = {
  title: "Nerve @ Yale",
  description: "Dare Your Friends",
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
          <MUIProvider>
            <body>{children}</body>
          </MUIProvider>
        </ContextProvider>
      </AWSProvider>
    </html>
  );
}
