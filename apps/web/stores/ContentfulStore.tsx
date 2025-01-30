import {
  AccordionCardQueryItem,
  ActionQueryItem,
  CardQueryItem,
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
      cardItems: (section: SectionQueryItem) => CardQueryItem[];
      accordionItems: (section: SectionQueryItem) => AccordionCardQueryItem[];
      actions: (section: SectionQueryItem) => ActionQueryItem[];
      hasContentItems: (section: SectionQueryItem) => boolean;
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
      cardItems: (section) => {
        return relationshipMap.cardCollection.filter((item) =>
          section.contentCollection?.items
            .filter((item) => item?.__typename === "Card")
            .map((item) => item?.sys.id)
            .includes(item.sys.id)
        );
      },
      accordionItems: (section) => {
        return relationshipMap.accordionCardCollection.filter((item) =>
          section.contentCollection?.items
            .filter((item) => item?.__typename === "AccordionCard")
            .map((item) => item?.sys.id)
            .includes(item.sys.id)
        );
      },
      actions: (section) => {
        return relationshipMap.actionCollection.filter((item) =>
          section.actionsCollection?.items
            .map((item) => item?.sys.id)
            .includes(item.sys.id)
        );
      },
      hasContentItems: (section) => {
        return Boolean(section.contentCollection?.items.length);
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
