import { useCallback, useEffect, useRef } from "react";
import { RANDOM_PRIMARY_COLORS, GRAY_PALETTES } from "../lib/constants";
import { useTheme } from "next-themes";
import { useSetColors } from "./useColorsState";

export const useRandomColor = () => {
  const setColors = useSetColors();
  const { theme } = useTheme();
  
  // Keep track of previously used indices to avoid immediate repetition
  const prevPrimaryIndex = useRef<number>(-1);
  const prevGrayIndex = useRef<number>(-1);

  const getRandomColor = useCallback((array: any[], prevIndex: React.MutableRefObject<number>) => {
    const arrayLength = array.length;
    let newIndex: number;
    
    // Generate a new index that's different from the previous one
    do {
      newIndex = Math.floor(Math.random() * arrayLength);
    } while (arrayLength > 1 && newIndex === prevIndex.current);
    
    // Update the previous index
    prevIndex.current = newIndex;
    return array[newIndex];
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        const appearance = theme === "light" ? "light" : "dark";

        setColors((prev) => ({
          ...prev,
          [`${appearance}/primary`]: getRandomColor(RANDOM_PRIMARY_COLORS, prevPrimaryIndex),
          [`${appearance}/gray`]: getRandomColor(GRAY_PALETTES, prevGrayIndex).value,
        }));
      }
    },
    [getRandomColor, setColors, theme]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};
