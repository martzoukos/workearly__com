import Motif from "@/components/Motif";
import { ThemeType } from "@workearly/api";
import { useTheme } from "next-themes";
import { useContext } from "react";

export default function useMotif() {
  const motifContext = useContext(Motif.Context);
  const { resolvedTheme: rootTheme, ...props } = useTheme();
  let resolvedTheme = rootTheme;

  if (motifContext?.theme) {
    resolvedTheme = motifContext.theme;
  }

  const invertedTheme = resolvedTheme === "dark" ? "light" : "dark";

  return {
    rootTheme: rootTheme as ThemeType,
    invertedTheme: invertedTheme as ThemeType,
    resolvedTheme: resolvedTheme as ThemeType,
    ...props,
  };
}
