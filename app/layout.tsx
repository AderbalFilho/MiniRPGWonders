import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "MiniRPGWonders Portfolio",
  description: "A portfolio of 3D models that MiniRPGWonders has the commercial license to print",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
