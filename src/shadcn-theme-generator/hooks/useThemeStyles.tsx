"use client";

import { generateRadixColors } from "@/shadcn-theme-generator/lib/generate-radix-colors";
import { createTheme } from "@/shadcn-theme-generator/lib/helpers";
import { useMemo, useState } from "react";
import { useColors } from "./useColorsState";
import { useTheme } from "next-themes";

const useThemeStyles = () => {
  const [radixColors, setRadixColors] = useState<any>();
  const { theme: currentTheme } = useTheme();
  const colorsState = useColors();

  const appearance = useMemo(() => {
    return currentTheme === "light" ? "light" : "dark";
  }, [currentTheme]);

  const theme = useMemo(() => {
    const colors = generateRadixColors({
      appearance,
      accent: colorsState[`${appearance}/primary`],
      gray: colorsState[`${appearance}/gray`],
      background: colorsState[`${appearance}/background`],
    });

    setRadixColors(colors);

    return createTheme({
      appearance,
      ...colors,
    });
  }, [colorsState, appearance]);

  return {
    theme,
    radixColors,
  };
};

export default useThemeStyles;
