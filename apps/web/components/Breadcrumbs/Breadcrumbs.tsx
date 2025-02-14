import Text from "@/components/Text";
import clsx from "clsx";
import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

type PropsType = {
  items: Array<{ name: string; href?: string }>;
  dividerChar?: string;
  className?: string;
};

export default function Breadcrumbs({
  items,
  dividerChar = ">",
  className,
}: PropsType) {
  const style = {
    "--divider-char": `"${dividerChar}"`,
  } as React.CSSProperties;

  return (
    <nav className={clsx(styles.root, className)} style={style}>
      <ul>
        {items.map((item) => (
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
