"use client";

import React from "react";
import ColorPalette from "./color-palette";
import { motion } from "framer-motion";
type Props = {};

export default function ThemeCustomizer({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-6 relative z-10">
      <div className="mt-12 mb-20">
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
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <ColorPalette />
      </motion.div>
    </div>
  );
}
