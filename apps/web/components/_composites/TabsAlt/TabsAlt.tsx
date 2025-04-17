import SectionRenderer from "@/components/_renderers/SectionRenderer";
import ActionButton from "@/components/ActionButton";
import Text from "@/components/Text";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import { QueryItem } from "@workearly/api";
import clsx from "clsx";
import { Tabs as RadixTabs } from "radix-ui";
import { useState } from "react";
import styles from "./TabsAlt.module.scss";

type PropsType = {
  composite: QueryItem["Composite"];
  className?: string;
};

export default function TabsAlt({ composite, className }: PropsType) {
  const { getReferences } = useCompositeResolver(composite);
  const childSections = getReferences("Section");
  const actions = getReferences("Action");
  const [activeTab, setActiveTab] = useState(childSections.at(0)?.sys.id);
  const hasHeader = Boolean(
    composite?.title || composite?.text || actions.length
  );

  return (
    <section className={clsx(styles.root, className)}>
      {hasHeader && (
        <header className={styles.header}>
          {composite?.title && (
            <Text as="h3" className={styles.title}>
              {composite.title}
            </Text>
          )}
          {composite?.text && (
            <Text as="small" className={styles.description}>
              {composite.text}
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
                {section.text && (
                  <button className={styles.trigger}>
                    <Text as="h4">{section.title}</Text>
                    <Text as="small">{section.text}</Text>
                  </button>
                )}
              </RadixTabs.Trigger>
            ))}
          </RadixTabs.List>
        </nav>
      </RadixTabs.Root>
    </section>
  );
}
