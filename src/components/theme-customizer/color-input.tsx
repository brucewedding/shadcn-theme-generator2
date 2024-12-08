"use client";

import React, { useId, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Colors } from "@/lib/types";
import { useColorsState } from "@/hooks/useColorsState";

type Props = {
  identifier: keyof Colors;
  label: string;
};

export default function ColorInput({ identifier, label }: Props) {
  const id = useId();
  const [colors, setColors] = useColorsState();

  const color = useMemo(() => colors[identifier], [colors, identifier]);

  const setColor = (value: string) => {
    setColors({ ...colors, [identifier]: value });
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={`${id}-color-input`}>{label}</Label>
      <div className="flex items-center gap-2 relative">
        <Input
          type="text"
          id={`${id}-color-input`}
          value={color.replace("#", "")}
          onChange={(e) => setColor(`#${e.target.value}`)}
          placeholder="Enter color"
          className="w-full ps-8"
        />
        <div className="absolute left-2">
          <label
            htmlFor={`${id}-color-picker`}
            className="size-4 rounded-[2px] block relative border border-gray-200"
            style={{
              backgroundColor: color,
            }}
          />

          <input
            id={`${id}-color-picker`}
            type="color"
            className={cn(
              "size-1 cursor-pointer border-none outline-none opacity-0 absolute"
            )}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
