import { Colors } from "@/lib/types";
import { DEFAULT_THEME } from "@/lib/constants";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<Colors>(() => localStorage);

export const colorsAtom = atomWithStorage<Colors>(
  "colors",
  { ...DEFAULT_THEME },
  storage
);
