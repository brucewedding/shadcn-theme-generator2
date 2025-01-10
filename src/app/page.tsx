"use client";

import ThemeCustomizer from "@/components/theme-customizer";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import useThemeStyles from "@/hooks/useThemeStyles";
import CardsDemo from "@/components/example/cards";
import { Footer } from "@/components/footer";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useThemeStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto py-6 scroll-mt-20 space-y-6 px-4 md:px-8 pt-20 pb-28">
      <ThemeCustomizer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CardsDemo />
      </motion.div>
      <Footer />
    </div>
  );
}
