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
