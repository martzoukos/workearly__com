import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, PropsWithChildren, useContext } from "react";
import { ThemeType } from "./types";

type ThemeContextType = {
  theme: ThemeType;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type ThemeProviderPropsType = PropsWithChildren<{
  theme: ThemeType;
}>;

export function ThemeProvider({ theme, children }: ThemeProviderPropsType) {
  const value = {
    theme,
  };

  return (
    <NextThemeProvider forcedTheme={theme} enableSystem={false}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </NextThemeProvider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used in ThemeProvider");
  }

  return context;
}
