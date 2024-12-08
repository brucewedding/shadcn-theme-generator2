"use client";

import { PRIMARY_COLOR, GRAY_COLOR, BACKGROUND_COLOR } from "@/shadcn-theme-generator/lib/constants";
import { generateRadixColors } from "@/shadcn-theme-generator/lib/generate-radix-colors";
import { createTheme } from "@/shadcn-theme-generator/lib/helpers";
import { useMemo } from "react";
import { useColors } from "./useColorsState";

const useThemeStyles = () => {
  const colorsState = useColors();

  const theme = useMemo(() => {
    const colors = generateRadixColors({
      appearance: "light",
      accent: colorsState[PRIMARY_COLOR],
      gray: colorsState[GRAY_COLOR],
      background: colorsState[BACKGROUND_COLOR],
    });

    return createTheme({
      appearance: "light",
      ...colors,
    });
  }, [colorsState]);

  return theme;
};

export default useThemeStyles;
