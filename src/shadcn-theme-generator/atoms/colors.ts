import { Colors } from "@/shadcn-theme-generator/lib/types";
import { DEFAULT_THEME } from "@/shadcn-theme-generator/lib/constants";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<Colors>(() => localStorage);

export const colorsAtom = atomWithStorage<Colors>(
  "colors",
  { ...DEFAULT_THEME },
  storage
);
