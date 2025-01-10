import { env } from "@/env";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Shadcn Theme Generator",
  description: "Generate custom themes for shadcn/ui",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_SITE_URL,
  links: {
    github: "https://github.com/Jauharmuhammed/shadcn-theme-generator",
  },
  keywords: [
    "shadcn",
    "theme",
    "generator",
    "custom",
    "ui",
    "shadcn-ui-theme-generator",
    "shadcn-theme-generator",
    "shadcn-theme-customizer",
    "shadcn-theme-personalizer",
    "theme-personalizer",
    "theme-customizer",
    "theme-generator",
    "color-generator",
    "color-customizer",
    "color-personalizer",
    "color-generator",
    "web-design",
    "web-development",
    "web-design-tools",
    "web-development-tools",
  ],
} as const;
