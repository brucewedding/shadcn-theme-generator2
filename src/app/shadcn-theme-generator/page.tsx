"use client";

import CardsDemo from "@/shadcn-theme-generator/components/example/cards";
import ThemeCustomizer from "@/shadcn-theme-generator/components/theme-customizer";
import useThemeStyles from "@/shadcn-theme-generator/hooks/useThemeStyles";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useThemeStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto py-6 scroll-mt-20 space-y-6 px-4 md:px-8 pt-20">
      <ThemeCustomizer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <CardsDemo />
      </motion.div>
    </div>
  );
}
