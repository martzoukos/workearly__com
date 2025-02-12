import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./Button.module.scss";

const buttonVariants = cva(styles.root, {
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
    iconPlacement: {
      Left: styles.iconPlacementLeft,
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export const Button = forwardRef<ButtonElement, PropsType>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      asChild,
      size,
      colorScheme,
      variant,
      isFullWidth,
      isRounded,
      iconPlacement,
      as: Tag = "button",
      ...rest
    } = props;

    return (
      <Slot.Root
        {...rest}
        ref={forwardedRef}
        className={clsx(
          buttonVariants({
            colorScheme,
            variant,
            size,
            isFullWidth,
            isRounded,
            iconPlacement,
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
