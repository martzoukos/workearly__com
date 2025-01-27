import { ClassValue } from "clsx";
import { ReactNode } from "react";

export type NextLinkPropsType = {
  className?: ClassValue;
  color?: "Green" | "White" | "Black";
  variant?: "Filled" | "Outlined" | "Ghost" | "Underlined";
  behaviour?: "Flex" | "Wrap";
  size?: "normal" | "medium" | "large";
  icon?: ReactNode;
  iconPlacement?: "Left" | "Right";
  href: string;
};
