import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/app/components/CookieBanner";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ZiggyTech Business Suite — 10 Tools. One Login. One Price.",
  description: "The complete business suite built by people who run one. 10 apps, 14-day free trial, one price.",
  openGraph: {
    title: "ZiggyTech Business Suite — 10 Tools. One Login. One Price.",
    description: "The complete business suite built by people who run one. 10 apps, 14-day free trial, one price.",
    siteName: "ZiggyHQ",
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon-192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="h-full bg-background text-white antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
