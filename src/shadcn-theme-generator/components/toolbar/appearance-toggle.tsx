"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {};

export default function AppearanceToggle({}: Props) {
  const { theme, setTheme,  } = useTheme();

  return (
    <Tabs value={theme || "light"} className="w-fit h-10">
      <TabsList className="w-full h-full">
        <TabsTrigger
          className="w-full h-full"
          value="light"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger
          className="w-full h-full"
          value="dark"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
