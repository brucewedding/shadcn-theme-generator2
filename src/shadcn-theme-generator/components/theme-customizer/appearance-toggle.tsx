import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {};

export default function AppearanceToggle({}: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <Tabs defaultValue={theme} className="w-[200px]">
      <TabsList className="w-full">
        <TabsTrigger
          className="w-full"
          value="light"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-4 h-4 mr-2" />
          Light
        </TabsTrigger>
        <TabsTrigger
          className="w-full"
          value="dark"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="w-4 h-4 mr-2" />
          Dark
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
