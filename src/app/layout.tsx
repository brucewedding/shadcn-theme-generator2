import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { AppearanceProvider } from "@/components/appearance-provider";
import { Toolbar } from "@/components/toolbar";
import { Inter } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff",
  variable: "--font-cal-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
        className={`${inter.variable} ${geistMono.variable} ${calSans.variable} antialiased font-inter`}
      >
        <AppearanceProvider>
          <ThemeWrapper className="flex items-center justify-center">
            {children}
            <Toolbar />
          </ThemeWrapper>
        </AppearanceProvider>
      </body>
    </html>
  );
}
