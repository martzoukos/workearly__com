import { fetchPageBySlug } from "@workearly/api";
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
} from "react";

const METADATA_MAP = {
  sectionAlignmentMap: {
    Left: "flex-start",
    Centered: "center",
  },
};

type ContextType = Awaited<ReturnType<typeof fetchPageBySlug>> & {
  resolveMetadataMap: {
    sectionAlignment: (value: string | null | undefined) => string;
    sectionCardsCount: (value: number | null | undefined) => number;
  };
  metadataMap: typeof METADATA_MAP;
};
const Context = createContext<ContextType | undefined>(undefined);

type PropsType = PropsWithChildren<ContextType>;

export const ContentfulProvider = ({
  children,
  page,
  relationshipMap,
}: PropsType): ReactElement => {
  const resolveMetadataMap: ContextType["resolveMetadataMap"] = {
    sectionAlignment: (value) => {
      return (
        METADATA_MAP.sectionAlignmentMap[
          value as keyof typeof METADATA_MAP.sectionAlignmentMap
        ] ?? METADATA_MAP.sectionAlignmentMap.Left
      );
    },
    sectionCardsCount: (value) => {
      return value ?? 1;
    },
  };

  return (
    <Context.Provider
      value={{
        page,
        relationshipMap,
        resolveMetadataMap,
        metadataMap: METADATA_MAP,
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
