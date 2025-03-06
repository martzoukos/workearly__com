import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { QueryItem } from "@workearly/api";
import { ThemeType } from "@workearly/theme";

const DATA_MAP = {
  size: ["Narrow", "Wide", "Full"],
  alignment: ["Left", "Centered"],
} as const;

export default function useShellResolver(
  item?:
    | QueryItem["Section"]
    | QueryItem["Composite"]
    | QueryItem["ContentTypeRichText"]
) {
  const { page } = useContentful();
  const { theme: pageTheme } = usePageResolver(page);
  const alignment = (item?.alignment ??
    "Left") as (typeof DATA_MAP.alignment)[number];

  const size = (item?.size ?? "Full") as (typeof DATA_MAP.size)[number];
  const theme = (item?.theme?.toLowerCase() || pageTheme) as ThemeType;

  return {
    alignment,
    size,
    theme,
  };
}
