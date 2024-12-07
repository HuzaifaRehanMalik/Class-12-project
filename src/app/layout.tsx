import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
        <body >
          <Navebar />
          {children}
          </body>
          <Footer />
      </html>

  );
}
