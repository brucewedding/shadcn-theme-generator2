"use client";

import useThemeStyles from "@/shadcn-theme-generator/hooks/useThemeStyles";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { getThemeProperties } from "../lib/helpers";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({ children, className }: ThemeWrapperProps) {
  const { theme: appearance } = useTheme();
  const { theme } = useThemeStyles();

  useEffect(() => {
    const root = document.documentElement;

    const properties = getThemeProperties(theme);

    Object.entries(properties).forEach(([key, value]) => {
      root.style.setProperty(key, value!);
    });

    return () => {
      Object.entries(properties).forEach(([key, _]) => {
        root.style.removeProperty(key);
      });
    };
  }, [theme, appearance]);

  return (
    <main className={cn("w-full bg-background", className)}>{children}</main>
  );
}
