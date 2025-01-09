import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useThemeStyles from "@/shadcn-theme-generator/hooks/useThemeStyles";
import { getThemeProperties } from "@/shadcn-theme-generator/lib/helpers";
import { CheckIcon, CopyIcon } from "lucide-react";

type Props = {};

const CopyCode = (props: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const { theme } = useThemeStyles();
  const themeProperties = getThemeProperties(theme);

  const themeCode = Object.entries(themeProperties)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(themeCode);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">
          Copy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Code</DialogTitle>
          <DialogDescription>
            Copy the code below and paste it into your css file.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 rounded-md relative">
          <div className="font-geist-mono text-sm leading-6 bg-muted p-4 rounded-md whitespace-pre-wrap  h-[500px] overflow-y-auto">
            {themeCode}
          </div>
          <div className="absolute top-2 right-2">
            <Button size="icon" variant="outline" onClick={handleCopy}>
              {isCopied ? (
                <CheckIcon className="w-4 h-4" />
              ) : (
                <CopyIcon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CopyCode;
