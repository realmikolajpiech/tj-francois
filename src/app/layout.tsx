import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TJ Francois",
  description: "People are TIRED of being sold to. I make content that connects with people behind the brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
