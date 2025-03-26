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
    ids: string[]
  ) => Pick<QueryItem, RelationshipMapTypeName>[T][];
  getReference: <T extends RelationshipMapTypeName>(
    typename: T,
    id: string
  ) => Pick<QueryItem, RelationshipMapTypeName>[T] | undefined;
  getTaggedReferences: <T extends RelationshipMapTypeName>(
    typename: T,
    tagIds: string[]
  ) => Pick<QueryItem, RelationshipMapTypeName>[T][];
};

const Context = createContext<ContextType | undefined>(undefined);

export const ContentfulProvider = ({
  children,
  ...props
}: PropsType): ReactElement => {
  const { relationshipMap } = props;

  function getReferences<T extends RelationshipMapTypeName>(
    typename: T,
    ids: string[]
  ): Pick<QueryItem, RelationshipMapTypeName>[T][] {
    const relationshipKey = camelCase(
      `${typename}Collection`
    ) as keyof typeof relationshipMap;

    return ids
      .map((id) => {
        const collection = relationshipMap[relationshipKey];

        return collection?.find((entry) => entry?.sys.id === id) as Pick<
          QueryItem,
          RelationshipMapTypeName
        >[T];
      })
      .filter(isDefined);
  }

  function getReference<T extends RelationshipMapTypeName>(
    typename: T,
    id: string
  ): Pick<QueryItem, RelationshipMapTypeName>[T] | undefined {
    const references = getReferences(typename, [id]);
    return references.at(0);
  }

  function getTaggedReferences<T extends RelationshipMapTypeName>(
    typename: T,
    tagIds: string[]
  ): Pick<QueryItem, RelationshipMapTypeName>[T][] {
    const relationshipKey = camelCase(
      `${typename}Collection`
    ) as keyof typeof relationshipMap;

    const collection = relationshipMap[relationshipKey];
    return collection
      ?.filter((entry) =>
        entry?.contentfulMetadata.tags
          .map((tag) => tag?.id as string)
          .some((id) => tagIds.includes(id))
      )
      .filter(isDefined) as Pick<QueryItem, RelationshipMapTypeName>[T][];
  }

  return (
    <Context.Provider
      value={{
        ...props,
        getReferences,
        getReference,
        getTaggedReferences,
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
