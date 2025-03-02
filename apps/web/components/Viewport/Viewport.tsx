import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Viewport.module.scss";

type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl";

type PropsType = PropsWithChildren<
  | { showUntil: BreakpointType; showAfter?: never }
  | { showAfter: BreakpointType; showUntil?: never }
>;

export default function Viewport({
  showUntil,
  showAfter,
  children,
}: PropsType) {
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
