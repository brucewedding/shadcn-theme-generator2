import Color from "colorjs.io";
import { ShadcnCssVariables } from "./types";

export const hexToHsl = (hex: string) => {
  return new Color(hex).to("hsl").toString();
};

const hslToCssValue = (hsl: string) => {
  return hsl.replace("hsl(", "").replace(")", "").replace("none", "0");
};

export const createTheme = (colors: any) => {
  console.log(colors, "colors");

  // --background: 0 0% 100%;
  //   --foreground: 240 10% 3.9%;
  //   --card: 0 0% 100%;
  //   --card-foreground: 240 10% 3.9%;
  //   --popover: 0 0% 100%;
  //   --popover-foreground: 240 10% 3.9%;
  //   --primary: 240 5.9% 10%;
  //   --primary-foreground: 0 0% 98%;
  //   --secondary: 240 4.8% 95.9%;
  //   --secondary-foreground: 240 5.9% 10%;
  //   --muted: 240 4.8% 95.9%;
  //   --muted-foreground: 240 3.8% 46.1%;
  //   --accent: 240 4.8% 95.9%;
  //   --accent-foreground: 240 5.9% 10%;
  //   --destructive: 0 84.2% 60.2%;
  //   --destructive-foreground: 0 0% 98%;
  //   --border: 240 5.9% 90%;
  //   --input: 240 5.9% 90%;
  //   --ring: 240 10% 3.9%;
  //   --chart-1: 12 76% 61%;
  //   --chart-2: 173 58% 39%;
  //   --chart-3: 197 37% 24%;
  //   --chart-4: 43 74% 66%;
  //   --chart-5: 27 87% 67%;
  //   --radius: 0.5rem;

  const theme: ShadcnCssVariables = {
    background: hslToCssValue(hexToHsl(colors.background)),
    foreground: hslToCssValue(hexToHsl(colors.accentScale[11])),
    card: hslToCssValue(hexToHsl(colors.background)),
    cardForeground: hslToCssValue(hexToHsl(colors.accentScale[11])),
    popover: hslToCssValue(hexToHsl(colors.background)),
    popoverForeground: hslToCssValue(hexToHsl(colors.accentScale[11])),
    primary: hslToCssValue(hexToHsl(colors.accentScale[8])),
    primaryForeground: hslToCssValue(hexToHsl(colors.accentScale[0])),
    secondary: hslToCssValue(hexToHsl(colors.grayScale[4])),
    secondaryForeground: hslToCssValue(hexToHsl(colors.grayScale[11])),
    muted: hslToCssValue(hexToHsl(colors.grayScale[4])),
    mutedForeground: hslToCssValue(hexToHsl(colors.grayScale[10])),
    accent: hslToCssValue(hexToHsl(colors.accentScale[2])),
    accentForeground: hslToCssValue(hexToHsl(colors.accentScale[11])),
    input: hslToCssValue(hexToHsl(colors.grayScale[5])),
    border: hslToCssValue(hexToHsl(colors.grayScale[5])),
    ring: hslToCssValue(hexToHsl(colors.accentScale[7])),
  };

  console.log(theme, "theme");

  return theme;
};
