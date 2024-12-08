"use client";

import React from "react";
import ColorInput from "./color-input";
import {
  PRIMARY_COLOR_PARAM,
  GRAY_COLOR_PARAM,
  BACKGROUND_COLOR_PARAM,
} from "@/lib/constants";

type Props = {};

export default function ThemeCustomizer({}: Props) {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="flex gap-4">
        <ColorInput urlParam={PRIMARY_COLOR_PARAM} label="Primary Color" />
        <ColorInput urlParam={GRAY_COLOR_PARAM} label="Gray Color" />
        <ColorInput
          urlParam={BACKGROUND_COLOR_PARAM}
          label="Background Color"
        />
      </div>
    </div>
  );
}
