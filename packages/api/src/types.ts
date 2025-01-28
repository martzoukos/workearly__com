import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { LOCALES } from "./constants";
import TRANSLATIONS from "./airtable/__generated__/translations.json";
import { TranslationTextType } from "./airtable";

export type NextLinkPropsType = {
  className?: ClassValue;
  color?: "Green" | "White" | "Black";
  variant?:
    | "Filled"
    | "Outlined"
    | "Ghost"
    | "Underlined"
    | "Decorative"
    | "Chip";
  behaviour?: "Flex" | "Wrap";
  size?: "normal" | "medium" | "large";
  icon?: ReactNode;
  iconPlacement?: "Left" | "Right";
  href: string;
};

export type LocaleType = (typeof LOCALES)[number];
export type TranslationType = (typeof TRANSLATIONS)[number];
export type TranslateOptionsType = {
  fallbackCode?: TranslationTextType;
  allowMissing?: boolean;
};
