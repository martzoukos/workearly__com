import { SectionQueryItem } from "@workearly/api";
import { useContentful } from "@/stores/ContentfulStore";

const DATA_MAP = {
  alignment: {
    Left: "flex-start",
    Centered: "center",
  },
};

export default function useSectionResolver(section: SectionQueryItem) {
  const { relationshipMap } = useContentful();
  const alignment =
    DATA_MAP.alignment[section.alignment as keyof typeof DATA_MAP.alignment] ??
    DATA_MAP.alignment.Left;
  const cardsCount = section.cardsCount ?? 1;
  const cardItems = relationshipMap.cardCollection.filter((item) =>
    section.contentCollection?.items
      .filter((item) => item?.__typename === "Card")
      .map((item) => item?.sys.id)
      .includes(item.sys.id)
  );
  const accordionItems = relationshipMap.accordionCardCollection.filter(
    (item) =>
      section.contentCollection?.items
        .filter((item) => item?.__typename === "AccordionCard")
        .map((item) => item?.sys.id)
        .includes(item.sys.id)
  );
  const actions = relationshipMap.actionCollection.filter((item) =>
    section.actionsCollection?.items
      .map((item) => item?.sys.id)
      .includes(item.sys.id)
  );
  const hasContentItems = Boolean(section.contentCollection?.items.length);
  const variant = (section.variant ?? "Default") as
    | "Default"
    | "Accordion"
    | "Tabs";

  return {
    alignment,
    cardsCount,
    cardItems,
    accordionItems,
    actions,
    hasContentItems,
    variant,
  };
}
