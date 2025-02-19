import { ThemeType } from "@workearly/api";
import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

interface ContextType {
  forcedTheme: ThemeType | undefined;
  isInverted: boolean;
}

const MotifContext = createContext<ContextType | undefined>(undefined);

type PropsType = PropsWithChildren<{
  forcedTheme?: ThemeType;
  isInverted?: boolean;
}>;

export default function Motif({
  forcedTheme,
  isInverted,
  children,
}: PropsType) {
  const value = {
    forcedTheme,
    isInverted: isInverted || false,
  };

  const motifyChildren = (children: ReactNode) => {
    const childrenArray = React.Children.toArray(children);

    return childrenArray.map((child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as ReactElement, {
          "data-theme": forcedTheme,
        });
      }
      return child;
    });
  };

  return (
    <MotifContext.Provider value={value}>
      {forcedTheme ? motifyChildren(children) : children}
    </MotifContext.Provider>
  );
}

Motif.Context = MotifContext;
