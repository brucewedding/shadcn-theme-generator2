"use client";

import React, { useMemo } from "react";
import ColorInput from "./color-input";
import AppearanceToggle from "./appearance-toggle";
import { useTheme } from "next-themes";
import ColorPalette from "./color-palette";

import { motion } from "framer-motion";
type Props = {};

export default function ThemeCustomizer({}: Props) {
  const { theme } = useTheme();

  const appearance = useMemo(() => {
    return theme === "light" ? "light" : "dark";
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="py-8">
        <div className="text-center font-calSans">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl "
          >
            shadcn/ui
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl bg-foreground bg-gradient-to-tl from-primary/80 via-foreground to-foreground bg-clip-text text-transparent"
          >
            Personalize Your Theme
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-geist text-sm my-1 text-foreground/50 text-center"
        >
          Generate your theme and personalize it to your liking.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center justify-center my-6"
      >
        <AppearanceToggle />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-4 my-6"
      >
        <ColorInput
          identifier={`${appearance}/primary`}
          label="Primary Color"
        />
        <ColorInput identifier={`${appearance}/gray`} label="Gray Color" />
        <ColorInput
          identifier={`${appearance}/background`}
          label="Background Color"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="my-8"
      >
        <ColorPalette />
      </motion.div>
    </div>
  );
}
