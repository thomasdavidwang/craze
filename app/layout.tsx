import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AWSProvider from "./components/AWSProvider";
import ContextProvider from "./components/ContextProvider";
import MUIProvider from "./components/MUIProvider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("http://www.trynerve.com"),
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6JMN2E1NEF" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6JMN2E1NEF');
        `}
      </Script>
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
