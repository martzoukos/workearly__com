import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { THEMES } from "./constants";
import { ThemeType } from "./types";

type ThemeContextType = {
  rootTheme: ThemeType;
  setRootTheme: (theme: ThemeType) => void;
  theme: ThemeType;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type ThemeProviderPropsType = PropsWithChildren<{
  defaultRootTheme?: ThemeType;
  theme?: ThemeType;
}>;

export function ThemeProvider({
  defaultRootTheme = THEMES[0],
  theme,
  children,
}: ThemeProviderPropsType) {
  const [rootTheme, setRootTheme] = useState(defaultRootTheme);

  const value = {
    rootTheme,
    setRootTheme,
    theme: theme || rootTheme,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", rootTheme);
  }, [rootTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used in ThemeProvider");
  }

  return context;
}
