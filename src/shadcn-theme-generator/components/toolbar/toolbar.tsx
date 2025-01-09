"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ColorInput from "./color-input";
import AppearanceToggle from "./appearance-toggle";
import CopyCode from "./copy-code";

type Props = {};

const Toolbar = (props: Props) => {
  const { theme } = useTheme();

  const appearance = useMemo(() => {
    return theme === "light" ? "light" : "dark";
  }, [theme]);

  return (
    <motion.div
      className="fixed bottom-4 p-2 border rounded-md shadow-md backdrop-blur-sm flex justify-center items-center gap-2 bg-background/95"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24, delay: 1 }}
    >
      <div className="flex gap-2">
        <ColorInput identifier={`${appearance}/primary`} label="Primary" />
        <ColorInput identifier={`${appearance}/gray`} label="Gray" />
        <ColorInput
          identifier={`${appearance}/background`}
          label="Background"
        />
      </div>
      <div className="w-px h-8 bg-border" />
      <AppearanceToggle />
      <div className="w-px h-8 bg-border" />
      <CopyCode />
    </motion.div>
  );
};

export default Toolbar;
