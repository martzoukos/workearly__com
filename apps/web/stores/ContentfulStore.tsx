import { fetchPageBySlug } from "@workearly/api";
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
} from "react";

type ContextType = Awaited<ReturnType<typeof fetchPageBySlug>>;
const Context = createContext<ContextType | undefined>(undefined);

type PropsType = PropsWithChildren<ContextType>;

export const ContentfulProvider = ({
  children,
  page,
  relationshipMap,
}: PropsType): ReactElement => {
  return (
    <Context.Provider
      value={{
        page,
        relationshipMap,
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
