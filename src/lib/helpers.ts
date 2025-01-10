import Color from "colorjs.io";
import { ShadcnCssVariables } from "./types";
import { Format } from "./constants";

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

  return `hsl(${formatNumber(h)}, ${formatNumber(s)}%, ${formatNumber(l)}%)`;
};

function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const hslToCssValue = (hsl: string) => {
  return hsl
    .replace("hsl(", "")
    .replace(")", "")
    .replaceAll("none", "0")
    .replaceAll(",", "");
};

export const createTheme = (colors: any) => {
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
    background: colors.background,
    foreground: colors.grayScale[11],
    card: colors.background,
    cardForeground: colors.grayScale[11],
    popover: colors.background,
    popoverForeground: colors.grayScale[11],
    primary: colors.accentScale[8],
    primaryForeground: colors.accentScale[0],
    secondary: colors.grayScale[4],
    secondaryForeground: colors.grayScale[11],
    muted: colors.grayScale[4],
    mutedForeground: colors.grayScale[10],
    accent: colors.accentScale[2],
    accentForeground: colors.accentScale[11],
    input: colors.grayScale[5],
    border: colors.grayScale[5],
    ring: colors.accentScale[7],
    destructive: "#ef4444",
    destructiveForeground: "#fafafa",
    chart1: "#f6a600",
    chart2: "#a3d9b8",
    chart3: "#2a4b5d",
    chart4: "#b3c300",
    chart5: "#d6b600",
  };

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

export const formatColor = (color: string, format: Format = Format.CSS) => {
  if (!validateHexColor(color)) {
    console.log(color, "color invalid");
    throw new Error("Invalid color");
  }

  switch (format) {
    case Format.CSS:
      return hslToCssValue(hexToHsl(color));
    case Format.HSL:
      return hexToHsl(color);
    case Format.RGB:
      return `rgb(${hexToRgb(color)?.r}, ${hexToRgb(color)?.g}, ${hexToRgb(color)?.b})`;
    default:
      return color;
  }
};

export const getThemeProperties = (
  theme: ShadcnCssVariables,
  format: Format = Format.CSS
) => {
  return {
    "--background": formatColor(theme.background!, format),
    "--foreground": formatColor(theme.foreground!, format),
    "--card": formatColor(theme.card!, format),
    "--card-foreground": formatColor(theme.cardForeground!, format),
    "--popover": formatColor(theme.popover!, format),
    "--popover-foreground": formatColor(theme.popoverForeground!, format),
    "--primary": formatColor(theme.primary!, format),
    "--primary-foreground": formatColor(theme.primaryForeground!, format),
    "--secondary": formatColor(theme.secondary!, format),
    "--secondary-foreground": formatColor(theme.secondaryForeground!, format),
    "--muted": formatColor(theme.muted!, format),
    "--muted-foreground": formatColor(theme.mutedForeground!, format),
    "--accent": formatColor(theme.accent!, format),
    "--accent-foreground": formatColor(theme.accentForeground!, format),
    "--destructive": formatColor(theme.destructive!, format),
    "--destructive-foreground": formatColor(
      theme.destructiveForeground!,
      format
    ),
    "--border": formatColor(theme.border!, format),
    "--input": formatColor(theme.input!, format),
    "--ring": formatColor(theme.ring!, format),
    "--chart-1": formatColor(theme.chart1!, format),
    "--chart-2": formatColor(theme.chart2!, format),
    "--chart-3": formatColor(theme.chart3!, format),
    "--chart-4": formatColor(theme.chart4!, format),
    "--chart-5": formatColor(theme.chart5!, format),
    "--radius": "0.5rem",
  };
};
