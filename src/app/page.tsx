"use client";

import CardsDemo from "@/components/example/cards";
import ThemeCustomizer from "@/components/theme-customizer";
import useThemeStyles from "@/hooks/useThemeStyles";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useThemeStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto py-6 scroll-mt-20 space-y-6">
      <ThemeCustomizer />
      <CardsDemo />
    </div>
  );
}
