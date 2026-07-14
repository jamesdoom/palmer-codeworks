import type { Metadata } from "next";
import { Berkshire_Swash, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const berkshireSwash = Berkshire_Swash({
  variable: "--font-berkshire-swash",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palmercodeworks.com"),
  title: {
    default: "Palmer Codeworks",
    template: "%s | Palmer Codeworks",
  },
  description: "Palmer Codeworks developer services.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Palmer Codeworks",
    description: "Palmer Codeworks developer services.",
    url: "https://palmercodeworks.com",
    siteName: "Palmer Codeworks",
    images: [
      {
        url: "/niki_emmert-dirt-road-7273240.jpg",
        width: 1920,
        height: 1275,
        alt: "Sunlit dirt road through green trees",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmer Codeworks",
    description: "Palmer Codeworks developer services.",
    images: ["/niki_emmert-dirt-road-7273240.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${berkshireSwash.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
