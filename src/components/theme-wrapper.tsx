"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import useThemeStyles from "@/hooks/useThemeStyles";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({ children, className }: ThemeWrapperProps) {
  const { theme: appearance } = useTheme();
  const { properties } = useThemeStyles();

  useEffect(() => {
    const root = document.documentElement;

    Object.entries(properties).forEach(([key, value]) => {
      root.style.setProperty(key, value!);
    });

    return () => {
      Object.entries(properties).forEach(([key, _]) => {
        root.style.removeProperty(key);
      });
    };
  }, [properties, appearance]);

  return (
    <main className={cn("w-full bg-background relative", className)}>
      <div className="absolute inset-x-0 z-0 top-0 h-[300px] bg-gradient-to-b from-primary/10 to-transparent" />
      {children}
    </main>
  );
}
