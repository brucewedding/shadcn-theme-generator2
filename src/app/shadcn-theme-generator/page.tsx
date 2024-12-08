"use client";

import CardsDemo from "@/shadcn-theme-generator/components/example/cards";
import ThemeCustomizer from "@/shadcn-theme-generator/components/theme-customizer";
import useThemeStyles from "@/shadcn-theme-generator/hooks/useThemeStyles";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useThemeStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto py-6 scroll-mt-20 space-y-6 px-4 md:px-8">
      <ThemeCustomizer />
      <CardsDemo />
    </div>
  );
}
