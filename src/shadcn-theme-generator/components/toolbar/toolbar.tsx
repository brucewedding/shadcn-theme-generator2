"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ColorInput from "./color-input";
import AppearanceToggle from "./appearance-toggle";
import CopyCode from "./copy-code";
import ResetButton from "./reset-button";
import {
  GRAY_PALETTES,
  PRIMARY_PALETTES,
} from "@/shadcn-theme-generator/lib/constants";

type Props = {};

const Toolbar = (props: Props) => {
  const { theme } = useTheme();

  const appearance = useMemo(() => {
    return theme === "light" ? "light" : "dark";
  }, [theme]);

  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="flex justify-center items-center gap-2 relative">
        <motion.div
          className="mb-4 mt-8 p-2 border rounded-xl backdrop-blur-sm flex justify-center items-center gap-2 bg-background/95 relative z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 1 }}
        >
          <div className="flex gap-2">
            <ColorInput
              identifier={`${appearance}/primary`}
              label="Primary"
              palette={PRIMARY_PALETTES}
            />
            <ColorInput
              identifier={`${appearance}/gray`}
              label="Gray"
              palette={GRAY_PALETTES}
            />
            <ColorInput
              identifier={`${appearance}/background`}
              label="Background"
            />
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex gap-2">
            <ResetButton className="size-10" />
            <AppearanceToggle />
          </div>
          <div className="w-px h-8 bg-border" />
          <CopyCode />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-50% to-background" />
      </div>
    </div>
  );
};

export default Toolbar;
