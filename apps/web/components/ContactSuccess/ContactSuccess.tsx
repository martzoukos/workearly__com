import Text from "@/components/Text";
import useTranslate from "@/hooks/useTranslate";
import { CheckboxCheckedFilled } from "@carbon/icons-react";
import { useRemarkSync } from "react-remark";
import styles from "./ContactSuccess.module.scss";

export default function ContactSuccess() {
  const { translate } = useTranslate();

  const markdown = useRemarkSync(translate("afterContactText"), {
    remarkPlugins: [],
    rehypeReactOptions: {},
  });

  return (
    <section className={styles.root}>
      <CheckboxCheckedFilled className={styles.icon} />
      <header className={styles.header}>
        <Text as="h2">{translate("afterContactTitle")}</Text>
        <Text>{translate("afterContactDescription")}</Text>
      </header>
      <div className={styles.markdown}>{markdown}</div>
    </section>
  );
}
