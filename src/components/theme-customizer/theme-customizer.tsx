"use client";

import React from "react";
import ColorInput from "./color-input";
import { PRIMARY_COLOR, GRAY_COLOR, BACKGROUND_COLOR } from "@/lib/constants";

type Props = {};

export default function ThemeCustomizer({}: Props) {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="flex gap-4">
        <ColorInput identifier={PRIMARY_COLOR} label="Primary Color" />
        <ColorInput identifier={GRAY_COLOR} label="Gray Color" />
        <ColorInput identifier={BACKGROUND_COLOR} label="Background Color" />
      </div>
    </div>
  );
}
