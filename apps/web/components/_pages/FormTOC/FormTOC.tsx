import Text from "@/components/Text";
import Link from "next/link";
import styles from "./FormTOC.module.scss";
import { Controller, Control } from "react-hook-form";

interface FormTOCProps {
  control: Control<Record<string, any>>;
}

export default function FormTOC({ control }: FormTOCProps) {
  return (
    <Controller
      name="terms"
      control={control}
      render={({ field }) => (
        <label className={styles.root}>
          <input
            type="checkbox"
            id="terms"
            className={styles.checkbox}
            checked={field.value}
            onChange={field.onChange}
            required
          />
          <Text size="small">
            Αποδέχομαι τους{" "}
            <Link className={styles.link} href="/terms">
              Όρους χρήσης
            </Link>{" "}
            και έχω ενημερωθεί για την επεξεργασία των προσωπικών μου δεδομένων,
            σύμφωνα με τη{" "}
            <Link className={styles.link} href="/data-policy">
              Δήλωση προστασίας προσωπικών δεδομένων
            </Link>
            .
          </Text>
        </label>
      )}
    />
  );
}
