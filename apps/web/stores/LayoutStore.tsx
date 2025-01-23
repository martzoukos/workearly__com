import {
  createContext,
  useContext,
  PropsWithChildren,
  ReactElement,
} from "react";
import { Page } from "@workearly/api";

type ContextType = {
  page: Page;
};

const LayoutContext = createContext<ContextType | undefined>(undefined);

type PropsType = PropsWithChildren<{
  page: Page;
}>;

export const LayoutProvider = ({ children, page }: PropsType): ReactElement => {
  return (
    <LayoutContext.Provider
      value={{
        page,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayout(): ContextType {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("No context found");
  }
  return context;
}
