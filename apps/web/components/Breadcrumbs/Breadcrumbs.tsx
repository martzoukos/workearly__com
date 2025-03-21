import Text from "@/components/Text";
import { useContentful } from "@/stores/ContentfulStore";
import clsx from "clsx";
import startCase from "lodash-es/startCase";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Breadcrumbs.module.scss";

type PropsType = {
  items?: Array<{ name: string; href?: string }>;
  dividerChar?: string;
  className?: string;
};

export default function Breadcrumbs({
  items,
  dividerChar = ">",
  className,
}: PropsType) {
  const { page } = useContentful();
  const router = useRouter();
  const pageSlugs = (router.query.pageSlugs || []) as Array<string>;
  const isMultiLevelDeep = pageSlugs.length > 1;
  const itemsFromSlugs = isMultiLevelDeep
    ? pageSlugs.slice(0, -1).map((slug) => ({
        name: startCase(slug),
        href: `/${slug}`,
      }))
    : [];

  const resolvedItems = items || [
    { name: "Home", href: "/" },
    ...itemsFromSlugs,
    { name: page.name || "" },
  ];

  const style = {
    "--divider-char": `"${dividerChar}"`,
  } as React.CSSProperties;

  return (
    <nav className={clsx(styles.root, className)} style={style}>
      <ul>
        {resolvedItems.map((item) => (
          <li key={item.name}>
            {item.href ? (
              <Text asChild size="caption">
                <Link href={item.href} className={styles.link}>
                  {item.name}
                </Link>
              </Text>
            ) : (
              <Text size="caption">{item.name}</Text>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
