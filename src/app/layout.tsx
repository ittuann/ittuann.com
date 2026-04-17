import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "@/styles/globals.css";

const noto = Noto_Sans_Mono({
  subsets: ["latin"],
  fallback: ["Noto_Sans_SC", "Noto_Sans_JP"],
});

export const metadata: Metadata = {
  title: "air wish (ittuann)",
  description: "air wish (ittuann) Website",
  keywords: ["ittuann", "blog"],
  authors: [{ name: "ittuann" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
