"use client";

import React, { useMemo } from "react";
import ColorInput from "./color-input";
import AppearanceToggle from "./appearance-toggle";
import { useTheme } from "next-themes";
import ColorPalette from "./color-palette";

type Props = {};

export default function ThemeCustomizer({}: Props) {
  const { theme } = useTheme();

  const appearance = useMemo(() => {
    return theme === "light" ? "light" : "dark";
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="py-8">
        <div className="text-center font-calSans">
          <h2 className="text-2xl ">shadcn/ui</h2>
          <h1 className="text-5xl bg-foreground bg-gradient-to-tl from-primary/80 via-foreground to-foreground bg-clip-text text-transparent">
            Personalize Your Theme
          </h1>
        </div>
        <p className="font-geist text-sm my-4 text-foreground/50 text-center">
          Generate your theme and personalize it to your liking.
        </p>
      </div>

      <div className="flex items-center justify-center my-6">
        <AppearanceToggle />
      </div>
      <div className="flex gap-4 my-6">
        <ColorInput
          identifier={`${appearance}/primary`}
          label="Primary Color"
        />
        <ColorInput identifier={`${appearance}/gray`} label="Gray Color" />
        <ColorInput
          identifier={`${appearance}/background`}
          label="Background Color"
        />
      </div>
      <div className="my-8">
        <ColorPalette />
      </div>
    </div>
  );
}
