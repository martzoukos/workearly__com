import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useMediaQuery } from "usehooks-ts";
import styles from "./Viewport.module.scss";

const BREAKPOINTS = {
  xs: "375px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
} as const;

type BreakpointType = keyof typeof BREAKPOINTS;

type PropsType =
  | { showUntil: BreakpointType; showAfter?: never }
  | { showAfter: BreakpointType; showUntil?: never };

export default function Viewport({
  showUntil,
  showAfter,
  children,
}: PropsWithChildren<PropsType>) {
  return (
    <div
      className={clsx(
        showUntil && styles[`show-until-${showUntil}`],
        showAfter && styles[`show-after-${showAfter}`]
      )}
    >
      {children}
    </div>
  );
}

export function useViewport(props: PropsType) {
  const breakpointValue = props.showAfter || props.showUntil;

  const width = BREAKPOINTS[breakpointValue];

  return useMediaQuery(
    props.showAfter ? `(min-width: ${width})` : `(max-width: ${width})`
  );
}
