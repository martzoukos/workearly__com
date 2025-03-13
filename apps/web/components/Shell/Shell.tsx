import ActionButton from "@/components/ActionButton";
import Text from "@/components/Text/Text";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import useSectionResolver from "@/hooks/useSectionResolver";
import useShellResolver from "@/hooks/useShellResolver";
import { QueryItem } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Shell.module.scss";

type ShellRootPropsType = PropsWithChildren<{
  alignment: ReturnType<typeof useShellResolver>["alignment"];
  size: ReturnType<typeof useShellResolver>["size"];
  theme: ReturnType<typeof useShellResolver>["theme"];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

function ShellRoot({
  as: Tag = "section",
  alignment,
  size,
  theme,
  className,
  children,
  ...props
}: ShellRootPropsType) {
  return (
    <Themed
      as={Tag}
      theme={theme}
      className={clsx(
        styles.root,
        styles[`size${size}`],
        styles[`alignment${alignment}`],
        className
      )}
      {...props}
    >
      {children}
    </Themed>
  );
}

type ShellHeaderPropsType = PropsWithChildren<{
  supertitle?: string | null;
  title?: string | null;
  text?: string | null;
  titleSize?: ReturnType<typeof useSectionResolver>["titleSize"];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

function ShellHeader({
  as: Tag = "header",
  supertitle,
  title,
  text,
  titleSize,
  className,
  children,
}: ShellHeaderPropsType) {
  const hasHeader = supertitle || title || text;

  if (!hasHeader) {
    return null;
  }

  return (
    <Tag className={clsx(styles.header, className)}>
      {children ? (
        <>
          <div>
            {supertitle && <Text>{supertitle}</Text>}
            {title && (
              <Text as="h4" size={titleSize}>
                {title}
              </Text>
            )}
            {text && <Text>{text}</Text>}
          </div>
          {children}
        </>
      ) : (
        <>
          {supertitle && <Text>{supertitle}</Text>}
          {title && (
            <Text as="h4" size={titleSize}>
              {title}
            </Text>
          )}
          {text && <Text>{text}</Text>}
        </>
      )}
    </Tag>
  );
}

type ShellActionsPropsType = {
  actions: QueryItem["Action"][];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

function ShellActions({
  as: Tag = "div",
  actions,
  className,
}: ShellActionsPropsType) {
  if (!actions.length) {
    return null;
  }

  return (
    <Tag className={clsx(styles.footer, className)}>
      {actions.map((action) => (
        <ActionButton key={action.sys.id} action={action} />
      ))}
    </Tag>
  );
}

type ShellContentPropsType = PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

function ShellContent({
  children,
  className,
  as: Tag = "div",
}: ShellContentPropsType) {
  return <Tag className={clsx(styles.content, className)}>{children}</Tag>;
}

type SectionLayoutPropsType = PropsWithChildren<{
  section: QueryItem["Section"];
  className?: string;
}>;

function SectionDefaultLayout({
  section,
  children,
  className,
}: SectionLayoutPropsType) {
  const { getReferences, titleSize } = useSectionResolver(section);
  const shell = useShellResolver(section);

  const actions = getReferences("Action");

  return (
    <ShellRoot className={clsx(styles.sectionDefault, className)} {...shell}>
      <ShellHeader
        supertitle={section.supertitle}
        title={section.title}
        text={section.text}
        titleSize={titleSize}
      />
      {children && <ShellContent>{children}</ShellContent>}
      <ShellActions as="footer" actions={actions} />
    </ShellRoot>
  );
}

function SectionAltLayout({
  section,
  children,
  className,
}: SectionLayoutPropsType) {
  const { getReferences, titleSize } = useSectionResolver(section);
  const shell = useShellResolver(section);

  const actions = getReferences("Action");

  return (
    <ShellRoot className={clsx(styles.sectionAlt, className)} {...shell}>
      <ShellHeader
        supertitle={section.supertitle}
        title={section.title}
        text={section.text}
        titleSize={titleSize}
        className={styles.headerAlt}
      >
        <ShellActions as="div" actions={actions} />
      </ShellHeader>
      {children && <ShellContent>{children}</ShellContent>}
    </ShellRoot>
  );
}

function SectionLayout({
  section,
  children,
  className,
}: SectionLayoutPropsType) {
  const { layout } = useSectionResolver(section);
  const Layout = layout === "Alt" ? SectionAltLayout : SectionDefaultLayout;

  return (
    <Layout section={section} className={className}>
      {children}
    </Layout>
  );
}

type CompositeLayoutPropsType = PropsWithChildren<{
  composite: QueryItem["Composite"];
}>;

function CompositeDefaultLayout({
  composite,
  children,
}: CompositeLayoutPropsType) {
  const { getReferences } = useCompositeResolver(composite);
  const shell = useShellResolver(composite);

  const actions = getReferences("Action");

  return (
    <ShellRoot className={styles.compositeDefault} {...shell}>
      <ShellHeader
        supertitle={composite.supertitle}
        title={composite.title}
        text={composite.text}
      />
      {children && <ShellContent>{children}</ShellContent>}
      <ShellActions as="footer" actions={actions} />
    </ShellRoot>
  );
}

function CompositeAltLayout({ composite, children }: CompositeLayoutPropsType) {
  const { getReferences } = useCompositeResolver(composite);
  const shell = useShellResolver(composite);

  const actions = getReferences("Action");

  return (
    <ShellRoot className={styles.compositeAlt} {...shell}>
      <ShellHeader
        supertitle={composite.supertitle}
        title={composite.title}
        text={composite.text}
        className={styles.headerAlt}
      >
        <ShellActions as="div" actions={actions} />
      </ShellHeader>
      {children && <ShellContent>{children}</ShellContent>}
    </ShellRoot>
  );
}

function CompositeLayout({ composite, children }: CompositeLayoutPropsType) {
  const { layout } = useCompositeResolver(composite);
  const Layout = layout === "Alt" ? CompositeAltLayout : CompositeDefaultLayout;

  return <Layout composite={composite}>{children}</Layout>;
}

const Shell = {
  Root: ShellRoot,
  Header: ShellHeader,
  Actions: ShellActions,
  Content: ShellContent,
  Section: SectionLayout,
  Composite: CompositeLayout,
};

export default Shell;
