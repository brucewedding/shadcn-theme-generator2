"use client";

import useThemeStyles from "@/hooks/useThemeStyles";
import { cn } from "@/lib/utils";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({ children, className }: ThemeWrapperProps) {
  const theme = useThemeStyles();

  return (
    <body
      className={cn("w-full bg-background", className)}
      style={
        {
          "--background": theme.background ?? "0 0% 100%",
          "--foreground": theme.foreground ?? "240 10% 3.9%",
          "--card": theme.card ?? "0 0% 100%",
          "--card-foreground": theme.cardForeground ?? "240 10% 3.9%",
          "--popover": theme.popover ?? "0 0% 100%",
          "--popover-foreground": theme.popoverForeground ?? "240 10% 3.9%",
          "--primary": theme.primary ?? "240 5.9% 10%",
          "--primary-foreground": theme.primaryForeground ?? "0 0% 98%",
          "--secondary": theme.secondary ?? "240 4.8% 95.9%",
          "--secondary-foreground": theme.secondaryForeground ?? "240 5.9% 10%",
          "--muted": theme.muted ?? "240 4.8% 95.9%",
          "--muted-foreground": theme.mutedForeground ?? "240 3.8% 46.1%",
          "--accent": theme.accent ?? "240 4.8% 95.9%",
          "--accent-foreground": theme.accentForeground ?? "240 5.9% 10%",
          "--destructive": theme.destructive ?? "0 84.2% 60.2%",
          "--destructive-foreground": theme.destructiveForeground ?? "0 0% 98%",
          "--border": theme.border ?? "240 5.9% 90%",
          "--input": theme.input ?? "240 5.9% 90%",
          "--ring": theme.ring ?? "240 10% 3.9%",
          "--chart-1": theme.chart1 ?? "12 76% 61%",
          "--chart-2": theme.chart2 ?? "173 58% 39%",
          "--chart-3": theme.chart3 ?? "197 37% 24%",
          "--chart-4": theme.chart4 ?? "43 74% 66%",
          "--chart-5": theme.chart5 ?? "27 87% 67%",
          "--radius": theme.radius ?? "0.5rem",
        } as React.CSSProperties
      }
    >
      {children}
    </body>
  );
}
