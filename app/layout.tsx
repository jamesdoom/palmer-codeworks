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

const seasonScript = `
(() => {
  const hour = new Date().getHours();
  const season = hour >= 5 && hour < 12 ? "morning" : hour >= 18 || hour < 5 ? "night" : "dusk";
  document.documentElement.dataset.season = season;
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://palmercodeworks.com"),
  title: {
    default: "Palmer Codeworks",
    template: "%s | Palmer Codeworks",
  },
  description: "Custom web apps, automation, and AI tools for small businesses.",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon-192.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Palmer Codeworks",
    description: "Custom web apps, automation, and AI tools for small businesses.",
    url: "https://palmercodeworks.com",
    siteName: "Palmer Codeworks",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Palmer Codeworks social preview card with forest road background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmer Codeworks",
    description: "Custom web apps, automation, and AI tools for small businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${berkshireSwash.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: seasonScript }} />
        {children}
      </body>
    </html>
  );
}
