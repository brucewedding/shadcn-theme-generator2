"use client";

import React, { useEffect, useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  urlParam: string;
  label: string;
};

export default function ColorInput({ urlParam, label }: Props) {
  const id = useId();
  const [mounted, setMounted] = useState(false);
  const [color, setColorState] = useState("000000");

  useEffect(() => {
    setMounted(true);
    // Get initial color from URL on mount
    const params = new URLSearchParams(window.location.search);
    const initialColor = params.get(urlParam)?.replace("#", "") || "000000";
    setColorState(initialColor);
  }, [urlParam]);

  const setColor = (value: string) => {
    value = value.replace("#", "");
    setColorState(value);

    // Update URL without navigation
    const params = new URLSearchParams(window.location.search);
    params.set(urlParam, value);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={`${id}-color-input`}>{label}</Label>
      <div className="flex items-center gap-2 relative">
        <Input
          type="text"
          id={`${id}-color-input`}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color"
          className="w-full ps-8"
        />
        <div className="absolute left-2">
          <label
            htmlFor={`${id}-color-picker`}
            className="size-4 rounded-[2px] block relative border border-gray-200"
            style={{
              backgroundColor: `#${color}`,
            }}
          />

          <input
            id={`${id}-color-picker`}
            type="color"
            className={cn(
              "size-1 cursor-pointer border-none outline-none opacity-0 absolute"
            )}
            value={`#${color}`}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
