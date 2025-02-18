import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { Slot } from "radix-ui";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./Button.module.scss";

const variants = cva(styles.root, {
  variants: {
    colorScheme: {
      Green: styles.colorSchemeGreen,
      White: styles.colorSchemeWhite,
      Black: styles.colorSchemeBlack,
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

type ButtonElement = React.ElementRef<"button">;

interface PropsType
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof variants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export const Button = forwardRef<ButtonElement, PropsType>(
  (props, forwardedRef) => {
    const { resolvedTheme } = useTheme();
    const {
      children,
      className,
      asChild,
      size,
      colorScheme,
      variant,
      isFullWidth,
      isRounded,
      as: Tag = "button",
      ...rest
    } = props;

    const defaultColorScheme = resolvedTheme === "dark" ? "White" : "Black";

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
