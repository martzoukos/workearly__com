import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";
import clsx from "clsx";

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
          <li key={item.href}>
            {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
