import * as Slot from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { ThemeProvider, useTheme } from "./ThemeStore";
import { ThemeType } from "./types";

type Element<T extends React.ElementType = "div"> = React.ElementRef<T>;

export interface ThemedProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  theme?: ThemeType;
  isInverted?: boolean;
}

export const Themed = forwardRef<Element, ThemedProps>(
  (props, forwardedRef) => {
    const { theme: nearestTheme } = useTheme();

    const {
      children,
      asChild,
      isInverted,
      theme,
      as: Tag = "div",
      ...rest
    } = props;

    let resolvedTheme = theme || nearestTheme;

    if (isInverted) {
      resolvedTheme = nearestTheme === "light" ? "dark" : "light";
    }

    return (
      <ThemeProvider theme={resolvedTheme}>
        <Slot.Root {...rest} ref={forwardedRef} data-theme={resolvedTheme}>
          {asChild ? children : <Tag>{children}</Tag>}
        </Slot.Root>
      </ThemeProvider>
    );
  }
);

Themed.displayName = "Themed";
