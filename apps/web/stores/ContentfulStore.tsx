import {
  ActionQueryItem,
  fetchPageBySlug,
  SectionQueryItem,
} from "@workearly/api";
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
} from "react";

const DATA_MAP = {
  section: {
    alignment: {
      Left: "flex-start",
      Centered: "center",
    },
  },
};

type ContextType = Awaited<ReturnType<typeof fetchPageBySlug>> & {
  resolver: {
    section: {
      alignment: (section: SectionQueryItem) => string;
      cardsCount: (section: SectionQueryItem) => number;
      contentItems: (
        section: SectionQueryItem
      ) => NonNullable<SectionQueryItem["contentCollection"]>["items"];
      actions: (section: SectionQueryItem) => ActionQueryItem[];
    };
  };
};
const Context = createContext<ContextType | undefined>(undefined);

type PropsType = PropsWithChildren<ContextType>;

export const ContentfulProvider = ({
  children,
  page,
  relationshipMap,
}: PropsType): ReactElement => {
  const resolver: ContextType["resolver"] = {
    section: {
      alignment: (section) => {
        return (
          DATA_MAP.section.alignment[
            section.alignment as keyof typeof DATA_MAP.section.alignment
          ] ?? DATA_MAP.section.alignment.Left
        );
      },
      cardsCount: (section) => {
        return section.cardsCount ?? 1;
      },
      contentItems: (section) => {
        if (section.cardVariant === "Icon and Text") {
          const cards = relationshipMap.cardCollection.filter((item) =>
            section.contentCollection?.items
              .filter((item) => item?.__typename === "Card")
              .map((item) => item?.sys.id)
              .includes(item.sys.id)
          );

          return cards;
        } else if (section.cardVariant === "Course Outline") {
          const accordionCards = relationshipMap.accordionCardCollection.filter(
            (item) =>
              section.contentCollection?.items
                .filter((item) => item?.__typename === "AccordionCard")
                .map((item) => item?.sys.id)
                .includes(item.sys.id)
          );

          return accordionCards;
        }

        return [];
      },
      actions: (section) => {
        return relationshipMap.actionCollection.filter((item) =>
          section.actionsCollection?.items
            .map((item) => item?.sys.id)
            .includes(item.sys.id)
        );
      },
    },
  };

  return (
    <Context.Provider
      value={{
        page,
        relationshipMap,
        resolver,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useContentful(): ContextType {
  const context = useContext(Context);

  if (!context) {
    throw new Error("No context found");
  }

  return context;
}
