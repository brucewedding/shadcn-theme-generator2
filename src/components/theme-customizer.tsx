"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import ColorInput from "./theme-customizer/color-input";

type Props = {};

const COLOR_PARAM = "color";

export default function ThemeCustomizer({}: Props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const color = useMemo(() => {
    if (!mounted || !router.isReady) return "000000";
    return (router.query[COLOR_PARAM] as string)?.replace("#", "") || "000000";
  }, [router.query, mounted, router.isReady]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center py-6">
      <ColorInput urlParam={COLOR_PARAM} label="Theme Color" />
    </div>
  );
} 