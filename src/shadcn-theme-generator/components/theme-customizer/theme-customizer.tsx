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
    <div className="flex flex-col items-center justify-center py-6 space-y-6">
      <div className="flex items-center justify-center">
        <AppearanceToggle />
      </div>
      <div className="flex gap-4">
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
      <div className="pt-8">
        <ColorPalette />
      </div>
    </div>
  );
}
