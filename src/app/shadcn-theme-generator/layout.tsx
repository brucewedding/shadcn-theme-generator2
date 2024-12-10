import type { Metadata } from "next";
import localFont from "next/font/local";
import "./shadcn-theme-generator.css";
import { ThemeWrapper } from "@/shadcn-theme-generator/components/theme-wrapper";
import { AppearanceProvider } from "@/shadcn-theme-generator/components/appearance-provider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
  title: "Shadcn UI Theme Generator",
  description: "Generate and customize your Shadcn UI theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calSans.variable} antialiased`}
      >
        <AppearanceProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </AppearanceProvider>
      </body>
    </html>
  );
}
