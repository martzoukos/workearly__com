import { ThemeType } from "@workearly/api";
import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

interface ContextType {
  theme: ThemeType;
}

const MotifContext = createContext<ContextType | undefined>(undefined);

type PropsType = PropsWithChildren<{
  theme: ThemeType;
}>;

export default function Motif({ theme, children }: PropsType) {
  const value = {
    theme,
  };

  const motifyChildren = (children: ReactNode) => {
    const childrenArray = React.Children.toArray(children);

    return childrenArray.map((child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as ReactElement, {
          "data-theme": theme,
        });
      }
      return child;
    });
  };

  return (
    <MotifContext.Provider value={value}>
      {motifyChildren(children)}
    </MotifContext.Provider>
  );
}

Motif.Context = MotifContext;
