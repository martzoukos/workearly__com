import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { NextLinkPropsType } from "@workearly/api";

type CustomLinkPropsType = PropsWithChildren<NextLinkPropsType>;

export function CustomLink({
  children,
  color = "Green",
  variant = "Filled",
  href,
  icon,
  size,
  behaviour,
  iconPlacement,
  className,
  ...props
}: CustomLinkPropsType) {
  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={clsx(styles.base, className)}
        data-color={color}
        data-variant={variant}
        data-behaviour={behaviour}
        data-iconplacement={iconPlacement}
        data-size={size}
        {...props}
      >
        {children}

        {icon}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={clsx(styles.base, className)}
      data-color={color}
      data-variant={variant}
      data-behaviour={behaviour}
      data-iconplacement={iconPlacement}
      data-size={size}
      {...props}
    >
      {children}

      {icon}
    </a>
  );
}
