import { QueryItem } from "@workearly/api";

const DATA_MAP = {
  variants: ["Header", "Footer", "Full Width Divider", "Mentors", "Partners"],
} as const;

export type UniqueComponentVariantType = (typeof DATA_MAP)["variants"][number];

export default function useUniqueComponentResolver(
  uniqueComponent: QueryItem["UniqueComponent"]
) {
  const variant = uniqueComponent.variant as UniqueComponentVariantType;

  return {
    variant,
  };
}
