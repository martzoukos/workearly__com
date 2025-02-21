import { QueryItem } from "@workearly/api";

const ACTION_VARIANTS = [
  "Filled",
  "Outlined",
  "Ghost",
  "Underlined",
  "Decorative",
  "Chip",
  "Tab",
] as const;

const TEMP_ACTION_VARIANTS = [
  "Solid",
  "Outlined",
  "Ghost",
  "Underlined",
  "Decorative",
] as const;

const ACTION_COLORS = ["Black", "White", "Green"] as const;

export type ActionVariantType = (typeof ACTION_VARIANTS)[number] | undefined;
export type TempActionVariantType =
  | (typeof TEMP_ACTION_VARIANTS)[number]
  | undefined;
export type ActionColorType = (typeof ACTION_COLORS)[number] | undefined;

export default function useActionResolver(action: QueryItem["Action"]) {
  const variant =
    action?.variant === "Filled" ||
    action?.variant === "Tab" ||
    action?.variant === "Chip"
      ? "Solid"
      : (action?.variant as TempActionVariantType);
  const color = action?.color as ActionColorType;

  return {
    variant,
    color,
  };
}
