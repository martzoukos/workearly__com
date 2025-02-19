import Motif from "@/components/Motif";
import { ThemeType } from "@workearly/api";
import { useTheme } from "next-themes";
import { useContext } from "react";

export default function useMotif() {
  const motifContext = useContext(Motif.Context);
  const { resolvedTheme: rootTheme, forcedTheme, ...props } = useTheme();
  let resolvedTheme = forcedTheme || rootTheme;

  if (motifContext?.isInverted) {
    resolvedTheme = resolvedTheme === "light" ? "dark" : "light";
  }

  if (motifContext?.forcedTheme) {
    resolvedTheme = motifContext.forcedTheme;
  }

  return {
    rootTheme: rootTheme as ThemeType,
    resolvedTheme: resolvedTheme as ThemeType,
    ...props,
  };
}
