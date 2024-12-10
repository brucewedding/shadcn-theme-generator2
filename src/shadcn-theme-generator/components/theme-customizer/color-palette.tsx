import React, { useMemo, useState } from "react";
import useThemeStyles from "@/shadcn-theme-generator/hooks/useThemeStyles";
import { hexToHsl, hslToCssValue } from "@/shadcn-theme-generator/lib/helpers";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ColorPalette = {
  hex: string;
  p3: string;
  hsl: string;
  hslCssValue: string;
};

const colorPaletteUsage = [
  "Backgrounds",
  "Backgrounds",
  "Interactive components",
  "Interactive components",
  "Interactive components",
  "Borders and separators",
  "Borders and separators",
  "Borders and separators",
  "Solid backgrounds, buttons",
  "Solid backgrounds, buttons",
  "Secondary text, links",
  "Secondary text, links",
];

const colorPalettePairsWith = [
  "Steps 11, 12 text",
  "Steps 11, 12 text",
  "Steps 11 labels, Step 12 text",
  "Steps 11, 12 labels",
  "Step 12 labels",
  "Steps 1–5 backgrounds",
  "Steps 1–5 backgrounds",
  "Steps 1–5 backgrounds",
  "White text",
  "White text",
  "Background colors",
  "Background colors",
];

type Props = {};

export default function ColorPalette({}: Props) {
  const { radixColors } = useThemeStyles();

  const getColorPalette = (scale: "accentScale" | "grayScale") => {
    const colorScale = radixColors?.[scale];
    const colorScaleWideGamut = `${scale}WideGamut`;

    return (colorScale ?? [])?.map((color: string, index: number) => {
      return {
        hex: color,
        p3: radixColors?.[colorScaleWideGamut]?.[index],
        hsl: hexToHsl(color).replaceAll(" ", ", "),
        "hsl (css value)": hslToCssValue(hexToHsl(color)),
      };
    });
  };

  const accentScale = useMemo(
    () => getColorPalette("accentScale"),
    [radixColors]
  );
  const grayScale = useMemo(() => getColorPalette("grayScale"), [radixColors]);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-center gap-1">
        {radixColors?.accentScale.map((_: string, index: number) => (
          <div
            key={index}
            className="w-12 h-6 flex items-center justify-center text-xs text-foreground/80"
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1">
        {accentScale?.map((color: ColorPalette, index: number) => (
          <ColorPaletteItem key={index} color={color} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1">
        {grayScale?.map((color: ColorPalette, index: number) => (
          <ColorPaletteItem key={index} color={color} index={index} />
        ))}
      </div>
    </div>
  );
}

const ColorPaletteItem = ({
  color,
  index,
}: {
  color: ColorPalette;
  index: number;
}) => {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  return (
    <HoverCard openDelay={400}>
      <HoverCardTrigger asChild>
        <div
          className="size-12 rounded-[2px] hover:outline hover:outline-1 hover:outline-offset-1 hover:outline-primary/50 cursor-pointer"
          style={{ backgroundColor: color.hex }}
        ></div>
      </HoverCardTrigger>
      <HoverCardContent className="p-2 w-80">
        <div>
          <div
            className="w-full aspect-video border rounded"
            style={{
              backgroundColor: color.hex,
            }}
          >
            <div
              className={cn("mt-auto p-2 h-full flex flex-col justify-end", {
                "text-black": index < 8,
                "text-white": index >= 8,
              })}
            >
              <div className="text-xs">Usage: {colorPaletteUsage[index]}</div>
              <div className="text-xs">
                Pairs with: {colorPalettePairsWith[index]}
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col">
            {Object.entries(color).map(([key, value]) => (
              <ColorPaletteItemTooltipValue
                key={key}
                name={key}
                value={value}
                copiedValue={copiedValue}
                setCopiedValue={setCopiedValue}
              />
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

interface ColorPaletteItemTooltipValueProps {
  name: string;
  value: string;
  copiedValue: string | null;
  setCopiedValue: (value: string | null) => void;
}

const ColorPaletteItemTooltipValue = ({
  name,
  value,
  copiedValue,
  setCopiedValue,
}: ColorPaletteItemTooltipValueProps) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger>
          <div
            className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-secondary/50 rounded"
            onClick={() => {
              navigator.clipboard.writeText(value);
              setCopiedValue(value);
              setOpen(true);
            }}
          >
            <span className="text-sm font-semibold text-foreground/80">
              {name}
            </span>
            <span className="text-sm text-foreground">{value}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-foreground text-background">
          {copiedValue === value ? "Copied" : "Click to copy"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
