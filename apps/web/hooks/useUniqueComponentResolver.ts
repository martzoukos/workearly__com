import { useContentful } from "@/stores/ContentfulStore";
import { QueryItem } from "@workearly/api";

const DATA_MAP = {
  variants: ["Header", "Footer", "Full Width Divider", "Mentors", "Partners"],
} as const;

export type UniqueComponentVariantType = (typeof DATA_MAP)["variants"][number];

export default function useUniqueComponentResolver(
  uniqueComponent: QueryItem["UniqueComponent"]
) {
  const { getReferences, getTaggedReferences } = useContentful();
  const variant = uniqueComponent.variant as UniqueComponentVariantType;

  const pageIds =
    uniqueComponent.contentCollection?.items.map(
      (item) => item?.sys.id as string
    ) || [];

  const tagIds = uniqueComponent.contentfulMetadata.tags.map(
    (tag) => tag?.id as string
  );

  const pages = getReferences("Page", pageIds);
  const taggedPages = getTaggedReferences("Page", tagIds);

  return {
    variant,
    pages: [...pages, ...taggedPages],
  };
}
