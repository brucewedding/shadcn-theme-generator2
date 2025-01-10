import { colorsAtom } from "@/atoms/colors";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";

export const useColors = () => {
  return useAtomValue(colorsAtom);
};

export const useSetColors = () => {
  const setColors = useSetAtom(colorsAtom);
  return useCallback(setColors, [setColors]);
};

export const useColorsState = () => {
  const [colors, setColors] = useAtom(colorsAtom);
  return [colors, useCallback(setColors, [setColors])] as const;
};
