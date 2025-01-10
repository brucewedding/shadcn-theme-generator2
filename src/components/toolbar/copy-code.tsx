import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import useThemeStyles from "@/hooks/useThemeStyles";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Format, FORMAT_OPTIONS } from "@/lib/constants";

type Props = {};

const CopyCode = (props: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [format, setFormat] = useState(Format.CSS);

  const { themeCode, accentCode, grayCode } = useThemeStyles(format);

  const items = [
    {
      label: "Default",
      value: "default",
      code: themeCode,
    },
    {
      label: "Accent",
      value: "accent",
      code: accentCode,
    },
    {
      label: "Gray",
      value: "gray",
      code: grayCode,
    },
  ];

  const handleCopy = (activeTab: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(
      items.find((item) => item.value === activeTab)?.code || ""
    );
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">Copy</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Code</DialogTitle>
          <DialogDescription>
            Copy the code below and paste it into your css file.
          </DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="default"
          className="w-full"
          onValueChange={() => setIsCopied(false)}
        >
          <div className="flex justify-between gap-2">
            <TabsList className="w-full">
              {items.map((item) => (
                <TabsTrigger
                  className="w-full"
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Select
              defaultValue="css"
              onValueChange={(value) => setFormat(value as Format)}
            >
              <SelectTrigger className="w-[200px] flex-shrink-0">
                <SelectValue placeholder="Format" asChild>
                  <div className="flex items-center">
                    <span className="font-semibold">Format:&nbsp;</span>
                    <span>{format}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="w-[200px]" align="end">
                {FORMAT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="font-medium text-xs">{option.label}</span>
                    <span className="text-xs text-muted-foreground">
                      &nbsp;&nbsp;{option.example}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {items.map((item) => (
            <TabsContent key={item.value} value={item.value} className="w-full">
              <div className="flex flex-col gap-2 rounded-md relative">
                <div className="font-geist-mono text-sm leading-6 bg-muted p-4 rounded-md whitespace-pre-wrap  h-[500px] overflow-y-auto">
                  {item.code}
                </div>
                <div className="absolute top-2 right-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleCopy(item.value)}
                  >
                    {isCopied ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <CopyIcon className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CopyCode;
