import { ColorPalette } from "./types";

export const LIGHT_DEFAULT_THEME = {
  "light/primary": "#18181b", // "#3D63DD",
  "light/gray": "#8B8D98",
  "light/background": "#FFFFFF",
};

export const DARK_DEFAULT_THEME = {
  "dark/primary": "#fafafa", // "#3D63DD",
  "dark/gray": "#8B8D98",
  "dark/background": "#111111",
};

export const DEFAULT_THEME = {
  ...LIGHT_DEFAULT_THEME,
  ...DARK_DEFAULT_THEME,
};

export enum Format {
  CSS = "CSS",
  HEX = "HEX",
  RGB = "RGB",
  HSL = "HSL",
}

export const FORMAT_OPTIONS = [
  { label: "CSS", value: Format.CSS, example: "228 80% 59%" },
  { label: "HEX", value: Format.HEX, example: "#3D63DD" },
  { label: "RGB", value: Format.RGB, example: "rgb(61, 99, 221)" },
  { label: "HSL", value: Format.HSL, example: "hsl(228, 80%, 59%)" },
];

export const GRAY_PALETTES: ColorPalette[] = [
  { label: "slate", value: "#64748b" },
  { label: "zinc", value: "#71717a" },
  { label: "neutral", value: "#737373" },
  { label: "gray", value: "#6b7280" },
  { label: "stone", value: "#78716c" },
  { label: "ash", value: "#7c7368" },
  { label: "fog", value: "#6d7876" },
  { label: "cloud", value: "#607274" },
];

export const PRIMARY_PALETTES: ColorPalette[] = [
  { label: "orange", value: "#f97316" },
  { label: "amber", value: "#f59e0b" },
  { label: "yellow", value: "#eab308" },
  { label: "lime", value: "#84cc16" },
  { label: "green", value: "#22c55e" },
  { label: "emerald", value: "#10b981" },
  { label: "teal", value: "#14b8a6" },
  { label: "cyan", value: "#06b6d4" },
  { label: "sky", value: "#0ea5e9" },
  { label: "blue", value: "#3b82f6" },
  { label: "indigo", value: "#6366f1" },
  { label: "violet", value: "#8b5cf6" },
  { label: "purple", value: "#a855f7" },
  { label: "fuchsia", value: "#d946ef" },
  { label: "pink", value: "#ec4899" },
  { label: "rose", value: "#f43f5e" }
 ];
