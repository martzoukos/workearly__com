import { ThemeType, useTheme } from "@workearly/theme";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Slot } from "radix-ui";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./Button.module.scss";

const variants = cva(styles.root, {
  variants: {
    colorScheme: {
      Green: styles.colorSchemeGreen,
      White: styles.colorSchemeWhite,
      Black: styles.colorSchemeBlack,
      Surface: styles.colorSchemeSurface,
    },
    variant: {
      Solid: styles.variantSolid,
      Outlined: styles.variantOutlined,
      Ghost: styles.variantGhost,
      Underlined: styles.variantUnderlined,
      Decorative: styles.variantDecorative,
    },
    size: {
      xsmall: styles.sizeXSmall,
      small: styles.sizeSmall,
      medium: styles.sizeMedium,
      large: styles.sizeLarge,
    },
    isFullWidth: {
      true: styles.featureIsFullWidth,
    },
    isRounded: {
      true: styles.featureIsRounded,
    },
  },
  defaultVariants: {
    size: "small",
    colorScheme: "White",
    variant: "Solid",
  },
});

type ButtonElement<T extends React.ElementType = "button"> =
  React.ElementRef<T>;

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof variants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  colorSchemes?: {
    [key in ThemeType]?: ButtonProps["colorScheme"];
  };
  isInverted?: boolean;
}

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { theme } = useTheme();
    const {
      children,
      className,
      asChild,
      size,
      colorScheme,
      variant,
      isFullWidth,
      isRounded,
      colorSchemes,
      isInverted,
      as: Tag = "button",
      ...rest
    } = props;

    let defaultColorScheme: VariantProps<typeof variants>["colorScheme"] =
      undefined;

    if (colorSchemes) {
      defaultColorScheme = colorSchemes[theme];
    } else if (theme) {
      defaultColorScheme = theme === "dark" ? "White" : "Black";

      if (isInverted) {
        defaultColorScheme = theme === "dark" ? "Black" : "White";
      }
    }

    return (
      <Slot.Root
        {...rest}
        ref={forwardedRef}
        className={clsx(
          variants({
            colorScheme: colorScheme || defaultColorScheme,
            variant,
            size,
            isFullWidth,
            isRounded,
          }),
          className
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot.Root>
    );
  }
);

Button.displayName = "Button";

export default Button;
