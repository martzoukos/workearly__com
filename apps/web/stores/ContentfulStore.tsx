import {
  fetchPageBySlug,
  isDefined,
  QueryItem,
  RelationshipMapTypeName,
} from "@workearly/api";
import { camelCase } from "lodash-es";
import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
} from "react";

type PropsType = PropsWithChildren<Awaited<ReturnType<typeof fetchPageBySlug>>>;

type ContextType = PropsType & {
  getReferences: <T extends RelationshipMapTypeName>(
    typename: T,
    ids?: string[]
  ) => Pick<QueryItem, RelationshipMapTypeName>[T][];
  getReference: <T extends RelationshipMapTypeName>(
    typename: T,
    id: string
  ) => Pick<QueryItem, RelationshipMapTypeName>[T] | undefined;
};

const Context = createContext<ContextType | undefined>(undefined);

export const ContentfulProvider = ({
  children,
  page,
  relationshipMap,
}: PropsType): ReactElement => {
  function getReferences<T extends RelationshipMapTypeName>(
    typename: T,
    ids?: string[]
  ): Pick<QueryItem, RelationshipMapTypeName>[T][] {
    const relationshipKey = camelCase(
      `${typename}Collection`
    ) as keyof typeof relationshipMap;

    return (
      relationshipMap[relationshipKey]
        .filter(isDefined)
        .filter((item) => item?.__typename === typename)
        .filter((item) => !ids || ids.includes(item.sys.id))
        .map((item) => {
          const collection = relationshipMap[relationshipKey];
          return collection?.find(
            (entry) => entry?.sys.id === item?.sys.id
          ) as Pick<QueryItem, RelationshipMapTypeName>[T];
        }) || []
    );
  }

  function getReference<T extends RelationshipMapTypeName>(
    typename: T,
    id: string
  ): Pick<QueryItem, RelationshipMapTypeName>[T] | undefined {
    const references = getReferences(typename);
    return references.find((reference) => reference?.sys.id === id);
  }

  return (
    <Context.Provider
      value={{
        page,
        relationshipMap,
        getReferences,
        getReference,
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
