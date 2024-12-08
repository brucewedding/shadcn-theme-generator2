import { Colors } from "@/lib/types";
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage<Colors>(() => localStorage);

export const colorsAtom = atomWithStorage<Colors>("colors", {
  "light/primary": "#3D63DD",
  "light/gray": "#8B8D98",
  "light/background": "#FFFFFF",
}, storage);
