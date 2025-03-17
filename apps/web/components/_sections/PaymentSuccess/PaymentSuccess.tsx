import Shell from "@/components/Shell";
import useShellResolver from "@/hooks/useShellResolver";
import { QueryItem } from "@workearly/api";
import styles from "./PaymentSuccess.module.scss";

type PropsType = {
  section: QueryItem["Section"];
};

export default function PaymentSuccess({ section }: PropsType) {
  const shell = useShellResolver(section);

  return (
    <Shell.Root className={styles.root} {...shell}>
      1
    </Shell.Root>
  );
}
