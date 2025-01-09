"use client";

import { generateRadixColors } from "@/shadcn-theme-generator/lib/generate-radix-colors";
import {
  createTheme,
  formatColor,
  getThemeProperties,
  validateHexColor,
} from "@/shadcn-theme-generator/lib/helpers";
import { useMemo, useState } from "react";
import { useColors } from "./useColorsState";
import { useTheme } from "next-themes";
import { Format } from "@/shadcn-theme-generator/lib/constants";

const useThemeStyles = (format: Format = Format.CSS) => {
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

  const properties = useMemo(() => {
    return getThemeProperties(theme);
  }, [theme]);

  const themeCode = useMemo(() => {
    return Object.entries(getThemeProperties(theme, Format.HEX))
      .map(([key, value]) => `${key}: ${validateHexColor(value) ? formatColor(value, format) : value};`)
      .join("\n");
  }, [theme, format]);

  const accentCode = useMemo(
    () =>
      (radixColors?.accentScale ?? [])
        .map(
          (color: string, index: number) =>
            `--accent-${index + 1}: ${formatColor(color, format)};`
        )
        .join("\n"),
    [radixColors, format]
  );

  const grayCode = useMemo(
    () =>
      (radixColors?.grayScale ?? [])
        .map(
          (color: string, index: number) =>
            `--gray-${index + 1}: ${formatColor(color, format)};`
        )
        .join("\n"),
    [radixColors, format]
  );

  return {
    theme,
    radixColors,
    properties,
    themeCode,
    accentCode,
    grayCode,
  };
};

export default useThemeStyles;
