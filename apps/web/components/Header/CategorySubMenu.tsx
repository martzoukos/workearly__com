import MenuCertificateCard from "@/components/_cards/MenuCertificateCard";
import MenuCourseCard from "@/components/_cards/MenuCourseCard";
import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import { CategorySubItemType } from "@workearly/api";
import { DropdownMenu } from "radix-ui";
import styles from "./CategorySubMenu.module.scss";
import MenuItem from "./MenuItem";

type PropsType = {
  menu: CategorySubItemType;
};

export default function CategorySubMenu({ menu }: PropsType) {
  const { getReference } = useContentful();

  return (
    <div className={styles.root}>
      <div>
        <header className={styles.header}>
          <Text size="h4">{menu.name}</Text>
          <Text>{menu.description}</Text>
        </header>

        <div className={styles.columns}>
          {menu.itemGroups.map((group, index) => {
            return (
              <div key={index}>
                <Text size="h6">{group.name}</Text>
                {group.items.map((item) => {
                  if (item.type === "reference") {
                    if (item.referenceType === "Page") {
                      const page = getReference("Page", item.referenceId);

                      if (!page) {
                        return null;
                      }

                      if (page.variant === "Course") {
                        return <MenuCourseCard key={item.name} page={page} />;
                      } else if (page.variant === "Certificate") {
                        return (
                          <MenuCertificateCard key={item.name} page={page} />
                        );
                      }
                    }

                    return null;
                  }

                  return (
                    <DropdownMenu.Item key={item.name} asChild>
                      <MenuItem item={item} />
                    </DropdownMenu.Item>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
