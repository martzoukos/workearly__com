import ActionButton from "@/components/ActionButton";
import SectionRenderer from "@/components/SectionRenderer";
import Text from "@/components/Text";
import useSectionResolver from "@/hooks/useSectionResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Tabs as RadixTabs } from "radix-ui";
import { useState } from "react";
import styles from "./TabsAlt.module.scss";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

export default function TabsAlt({ section, className }: PropsType) {
  const { getReferences } = useSectionResolver(section);
  const childSections = getReferences("Section");
  const actions = getReferences("Action");
  const [activeTab, setActiveTab] = useState(childSections.at(0)?.sys.id);
  const hasHeader = Boolean(section.title || section.text || actions.length);

  return (
    <section className={clsx(styles.root, className)}>
      {hasHeader && (
        <header className={styles.header}>
          {section.title && (
            <Text as="h3" className={styles.title}>
              {section.title}
            </Text>
          )}
          {section.text && (
            <Text as="small" className={styles.description}>
              {section.text}
            </Text>
          )}
          {Boolean(actions.length) && (
            <div>
              {actions.map((action) => (
                <ActionButton key={action.sys.id} action={action} />
              ))}
            </div>
          )}
        </header>
      )}
      <RadixTabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className={styles.tabs}
      >
        {childSections.map((section) => (
          <RadixTabs.Content key={section.sys.id} value={section.sys.id}>
            <SectionRenderer section={section} />
          </RadixTabs.Content>
        ))}
        <nav>
          <RadixTabs.List
            className={styles.triggerList}
            style={
              { "--column-count": childSections.length } as React.CSSProperties
            }
          >
            {childSections.map((section) => (
              <RadixTabs.Trigger
                key={section.sys.id}
                value={section.sys.id}
                asChild
              >
                <button className={styles.trigger}>
                  <Text as="h4">{section.title}</Text>
                  <Text as="small">{section.text}</Text>
                </button>
              </RadixTabs.Trigger>
            ))}
          </RadixTabs.List>
        </nav>
      </RadixTabs.Root>
    </section>
  );
}
