"use client";

import React, { useMemo, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { ColorPalette, Colors } from "@/shadcn-theme-generator/lib/types";
import { useColorsState } from "@/shadcn-theme-generator/hooks/useColorsState";
import { getTextColorForBackground } from "@/shadcn-theme-generator/lib/helpers";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { HexColorPicker, HexColorInput } from "react-colorful";

type Props = {
  identifier: keyof Colors;
  label: string;
  palette?: ColorPalette[];
};

export default function ColorInput({ identifier, label, palette }: Props) {
  const [colors, setColors] = useColorsState();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const color = useMemo(() => colors[identifier], [colors, identifier]);
  const textColor = useMemo(() => getTextColorForBackground(color), [color]);

  const debouncedSetColor = useCallback(
    (value: string) => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        setColors((prevColors) => ({ ...prevColors, [identifier]: value }));
      }, 1);
    },
    [identifier, setColors]
  );

  const handleColorChange = (value: string) => {
    const newColor = value.startsWith("#") ? value : `#${value}`;
    debouncedSetColor(newColor);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 relative">
        <Popover>
          <PopoverTrigger>
            <div
              className="h-10 w-24 rounded-md relative border border-gray-200 flex items-center justify-center text-xs"
              style={{
                backgroundColor: color,
                color: textColor,
              }}
            >
              {label}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-fit flex flex-col gap-2">
            <HexColorPicker color={color} onChange={handleColorChange} />
            <HexColorInput
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              )}
              color={color}
              onChange={handleColorChange}
            />
            {palette?.length && (
              <div className="gap-1 grid grid-cols-8">
                {palette.map((item) => (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className="w-full aspect-square rounded-md"
                          style={{
                            backgroundColor: item.example ?? item.value,
                          }}
                          onClick={() => handleColorChange(item.value)}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
