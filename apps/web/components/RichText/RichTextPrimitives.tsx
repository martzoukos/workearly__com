import useRichTextResolver from "@/hooks/useRichTextResolver";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import TitleTextCard from "../_cards/TitleTextCard/TitleTextCard";
import Button from "../Button/Button";
import Text, { TextProps as BaseTextProps } from "../Text/Text";
import List from "./List";
import ListItem from "./ListItem";
import styles from "./RichText.module.scss";

type NodeBaseProps = PropsWithChildren<{
  resolver: ReturnType<typeof useRichTextResolver>;
}>;

type TextProps = Omit<BaseTextProps, "children"> & NodeBaseProps;

export const H1 = ({ resolver, ...props }: TextProps) => (
  <Text as="h1" {...props} />
);
export const H2 = ({ resolver, ...props }: TextProps) => {
  return (
    <Text
      as="h2"
      className={clsx(resolver.variant === "Default" && styles.h2)}
      {...props}
    />
  );
};

export const H3 = ({ resolver, ...props }: TextProps) => {
  return (
    <Text
      as="h3"
      className={clsx(resolver.variant === "Default" && styles.h3)}
      {...props}
    />
  );
};

export const H4 = ({ resolver, ...props }: TextProps) => {
  return (
    <Text
      as="h4"
      className={clsx(resolver.variant === "Default" && styles.h4)}
      {...props}
    />
  );
};

export const H5 = ({ resolver, ...props }: TextProps) => {
  return (
    <Text
      as="h5"
      className={clsx(resolver.variant === "Default" && styles.h5)}
      {...props}
    />
  );
};

export const H6 = ({ resolver, ...props }: TextProps) => {
  return (
    <Text
      as="h6"
      className={clsx(resolver.variant === "Default" && styles.h6)}
      {...props}
    />
  );
};

export const P = ({ resolver, ...props }: TextProps) => {
  return (
    <Text
      as="p"
      className={clsx(resolver.variant === "Default" && styles.p)}
      {...props}
    />
  );
};

export const UL = ({ resolver, children }: NodeBaseProps) => {
  if (resolver.variant !== "Default") {
    return (
      <List
        columnCount={resolver.columnCount}
        className={clsx(resolver.renderListAsChips && styles.chips)}
      >
        {children}
      </List>
    );
  }

  return <ul className={styles.ul}>{children}</ul>;
};

export const LI = ({ resolver, children }: NodeBaseProps) => {
  if (resolver.renderListAsCards) {
    return <TitleTextCard>{children}</TitleTextCard>;
  } else if (resolver.renderListAsChips) {
    return <Button isRounded>{children}</Button>;
  } else if (resolver.variant !== "Default") {
    return (
      <ListItem
        icon={
          resolver.IconComponent ? (
            <resolver.IconComponent className={styles.listItemIcon} />
          ) : null
        }
      >
        {children}
      </ListItem>
    );
  }

  return <li className={styles.li}>{children}</li>;
};

export const BlockQuote = ({ resolver, children }: NodeBaseProps) => {
  return (
    <div className={styles.blockquoteContainer}>
      <blockquote>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.as === "p") {
            return (
              <Text size="h4" as="div" className={styles.blockquoteInner}>
                {child.props.children}
              </Text>
            );
          }
          return child;
        })}
      </blockquote>
    </div>
  );
};
