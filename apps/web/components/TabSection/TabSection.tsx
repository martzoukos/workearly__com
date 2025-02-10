import styles from "./TabSection.module.scss";
import Text from "@/components/Text/Text";
import { QueryItem } from "@workearly/api";
import useSectionResolver from "@/hooks/useSectionResolver";
import Button from "../Button/Button";
import { useState } from "react";
import CourseCard from "@/components/_cards/CourseCard/CourseCard";

type PropsType = {
  section: QueryItem["Section"];
  className?: string;
};

const TabSection = ({ section }: PropsType) => {
  const { getReferences } = useSectionResolver(section);
  const nestedSections = getReferences("Section");
  const sectionActions = getReferences("Action");
  if (nestedSections.length === 0) return null;

  const [currentTab, setCurrentTab] = useState(nestedSections[0]);
  const { getReferences: getReferncesTab } = useSectionResolver(
    currentTab as QueryItem["Section"]
  );
  const currentTabActions = getReferncesTab("Action");
  const currentTabPages = getReferncesTab("Page");
  const highestPercentage =
    currentTab?.metadata?.values?.reduce(
      (max: number, v: any) => Math.max(max, v.percentage),
      0
    ) || 0;

  return (
    <div className={styles.root}>
      {nestedSections.length > 1 && (
        <div className={styles.header}>
          <div className={styles.tabButtonsHolder}>
            {nestedSections.map((section) => {
              return (
                <Button
                  variant={"Outlined"}
                  colorScheme={"Transparent"}
                  className={styles.tabButton}
                  data-active={currentTab === section}
                  onClick={() => setCurrentTab(section)}
                >
                  {section.title}
                </Button>
              );
            })}
          </div>

          <div className={styles.sectionActions}>
            {sectionActions.map((action) => {
              return <Button>{action.name}</Button>;
            })}
          </div>
        </div>
      )}

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.text}>
            <Text size="h3">{currentTab?.title}</Text>
            <Text>{currentTab?.text}</Text>
          </div>
          {(currentTab?.metadata?.title ||
            currentTab?.metadata?.values?.length > 0) && (
            <div className={styles.statics}>
              {currentTab?.metadata?.title && (
                <Text className={styles.staticsTitle}>
                  {currentTab.metadata.title}
                </Text>
              )}

              {currentTab?.metadata?.values?.length > 0 &&
                currentTab?.metadata.values.map((item: any) => (
                  <div
                    className={styles.staticsBar}
                    data-active={item.percentage == highestPercentage}
                    style={{ width: `${item.percentage}%` }}
                  >
                    <Text>{item.title}</Text>
                    <Text>{item.amount}</Text>
                  </div>
                ))}
            </div>
          )}

          {currentTabActions.length > 0 && (
            <div className={styles.buttons}>
              {currentTabActions.map((item) => (
                <Button>{item.name}</Button>
              ))}
            </div>
          )}
        </div>

        {currentTabPages.length > 0 && (
          <div className={styles.pages}>
            {currentTabPages.map((page) => {
              return <CourseCard page={page} className={styles.card} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSection;
