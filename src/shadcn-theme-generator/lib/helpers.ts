import Color from "colorjs.io";
import { ShadcnCssVariables } from "./types";

export const hexToHsl = (hex: string, decimal: number = 1) => {
  const color = new Color(hex).to("hsl");
  const h = Number(color.coords[0] || 0).toFixed(decimal);
  const s = Number(color.coords[1] || 0).toFixed(decimal);
  const l = Number(color.coords[2] || 0).toFixed(decimal);
  
  // Remove trailing zeros and decimal points if the number is whole
  const formatNumber = (num: string) => {
    const parsed = parseFloat(num);
    return isNaN(parsed) ? "0" : parsed.toString();
  };
  
  return `hsl(${formatNumber(h)} ${formatNumber(s)}% ${formatNumber(l)}%)`;
};

export const hslToCssValue = (hsl: string) => {
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
    foreground: hslToCssValue(hexToHsl(colors.grayScale[11])),
    card: hslToCssValue(hexToHsl(colors.background)),
    cardForeground: hslToCssValue(hexToHsl(colors.grayScale[11])),
    popover: hslToCssValue(hexToHsl(colors.background)),
    popoverForeground: hslToCssValue(hexToHsl(colors.grayScale[11])),
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

export const validateHexColor = (hex: string) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
};

export const getTextColorForBackground = (background: string) => {
  // validate color
  if (!validateHexColor(background)) {
    throw new Error("Invalid color");
  }
  const rgb = {
    r: parseInt(background.slice(1, 3), 16),
    g: parseInt(background.slice(3, 5), 16),
    b: parseInt(background.slice(5, 7), 16),
  };
  const brightness = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
  return brightness < 128 ? "white" : "black";
};

export const getThemeProperties = (theme: ShadcnCssVariables) => {
  return {
    "--background": theme.background ?? "0 0% 100%",
    "--foreground": theme.foreground ?? "240 10% 3.9%",
    "--card": theme.card ?? "0 0% 100%",
    "--card-foreground": theme.cardForeground ?? "240 10% 3.9%",
    "--popover": theme.popover ?? "0 0% 100%",
    "--popover-foreground": theme.popoverForeground ?? "240 10% 3.9%",
    "--primary": theme.primary ?? "240 5.9% 10%",
    "--primary-foreground": theme.primaryForeground,
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
  };
};
