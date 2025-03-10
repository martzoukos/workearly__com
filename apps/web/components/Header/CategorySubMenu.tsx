import MenuCertificateCard from "@/components/_cards/MenuCertificateCard";
import MenuCourseCard from "@/components/_cards/MenuCourseCard";
import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import styles from "./CategorySubMenu.module.scss";
import { CategorySubItem } from "./Menu";
import MenuItem from "./MenuItem";

type PropsType = {
  menu: CategorySubItem;
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
                {group.map((item) => {
                  if (item.type === "label") {
                    return (
                      <Text key={item.name} size="h6">
                        {item.name}
                      </Text>
                    );
                  }

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

                  return <MenuItem key={item.name} item={item} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
