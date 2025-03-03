import Button from "@/components/Button";
import Text from "@/components/Text/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import { Themed } from "@workearly/theme";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Section.module.scss";

type PropsType = PropsWithChildren<{
  section: QueryItem["Section"];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

function SectionRoot({
  as: Tag = "section",
  section,
  className,
  children,
}: PropsType) {
  const { flexAlignment, size } = useSectionResolver(section);
  const style = {
    "--flex-alignment": flexAlignment,
  } as React.CSSProperties;

  return (
    <Themed
      as={Tag}
      className={clsx(styles.root, styles[`size${size}`], className)}
      style={style}
    >
      {children}
    </Themed>
  );
}

function SectionHeader({ as: Tag = "header", section, className }: PropsType) {
  const { titleSize } = useSectionResolver(section);

  const hasHeader = section.supertitle || section.title || section.text;

  if (!hasHeader) {
    return null;
  }

  return (
    <Tag className={clsx(styles.header, className)}>
      {section.supertitle && <Text>{section.supertitle}</Text>}
      {section.title && (
        <Text as="h4" size={titleSize}>
          {section.title}
        </Text>
      )}
      {section.text && <Text>{section.text}</Text>}
    </Tag>
  );
}

function SectionActions({ as: Tag = "div", section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);

  const actions = getReferences("Action");

  if (!actions.length) {
    return null;
  }

  return (
    <Tag className={clsx(styles.footer, className)}>
      {actions.map((action) => (
        <Button
          key={action.sys.id}
          variant="Solid"
          isRounded={true}
          colorScheme="White"
        >
          {action.name}
        </Button>
      ))}
    </Tag>
  );
}

function SectionContent({
  children,
  className,
  as: Tag = "div",
}: Omit<PropsType, "section">) {
  return <Tag className={clsx(styles.content, className)}>{children}</Tag>;
}

function SectionDefaultLayout({ section, className, children }: PropsType) {
  return (
    <SectionRoot section={section} className={className}>
      <SectionHeader section={section} />
      {children && <SectionContent>{children}</SectionContent>}
      <SectionActions as="footer" section={section} />
    </SectionRoot>
  );
}

const Section = {
  Root: SectionRoot,
  Header: SectionHeader,
  Actions: SectionActions,
  Content: SectionContent,
  DefaultLayout: SectionDefaultLayout,
};

export default Section;
