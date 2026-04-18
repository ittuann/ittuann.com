import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm"
          src="https://www.googletagmanager.com/gtag/js?id=G-QETGFF96H1"
        />
        <Script id="gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QETGFF96H1');
          `}
        </Script>
      </head>
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}
