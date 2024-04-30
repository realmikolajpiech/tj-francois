import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vital Socials",
  description: "Vital Socials partners with top eCommerce brands to craft captivating ad creatives that stop the scroll. We cherish the collaboration with our esteemed team of creators, who bring their passion and expertise to every project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="./hotjar.js"></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
