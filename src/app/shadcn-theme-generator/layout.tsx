import type { Metadata } from "next";
import localFont from "next/font/local";
import "./shadcn-theme-generator.css";
import { ThemeWrapper } from "@/shadcn-theme-generator/components/theme-wrapper";
import { AppearanceProvider } from "@/shadcn-theme-generator/components/appearance-provider";
import { Toolbar } from "@/shadcn-theme-generator/components/toolbar";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff",
  variable: "--font-cal-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shadcn Theme Generator",
  description: "Generate custom themes for shadcn/ui",
  icons: {
    icon: "/shadcn-theme-generator/icon.ico",
    shortcut: "/shadcn-theme-generator/icon.ico",
    apple: "/shadcn-theme-generator/icon.ico",
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
