"use client";

import {
  PRIMARY_COLOR_PARAM,
  GRAY_COLOR_PARAM,
  BACKGROUND_COLOR_PARAM,
} from "@/lib/constants";
import { getColorFromUrl } from "@/lib/helpers";

const useThemeStyles = () => {
  const primaryColor = getColorFromUrl(PRIMARY_COLOR_PARAM);

  console.log(primaryColor, "primaryColor");
};

export default useThemeStyles;
