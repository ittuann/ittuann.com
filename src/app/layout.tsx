import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_Mono, Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

const fontMono = Noto_Sans_Mono({
  subsets: ["latin"],
  fallback: ["Noto_Sans_SC", "Noto_Sans_JP", "Noto_Sans"],
  variable: "--font-mono",
});

const fontSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "air wish (ittuann)",
  description: "air wish (ittuann) Website",
  keywords: [
    "ittuann",
    "air wish",
    "BaiQi Lu",
    "Lu BaiQi",
    "personal website",
    "blog",
    "welcome page",
  ],
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
        <meta name="apple-mobile-web-app-title" content="air wish" />
      </head>
      <body
        className={`${fontMono.variable} ${fontSans.variable} font-mono antialiased`}
      >
        {children}

        <Script
          id="gtag-js"
          src="https://www.googletagmanager.com/gtag/js?id=G-QETGFF96H1"
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QETGFF96H1');
          `}
        </Script>
        <Script id="msclarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x3vah99fmw");
          `}
        </Script>
      </body>
    </html>
  );
}
