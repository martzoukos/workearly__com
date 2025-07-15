import { Input } from "@/components/_sections/Form/FormPrimitives";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./EmailGatherForm.module.scss";
import Button from "../Button";
import { Close } from "@carbon/icons-react";
import Text from "../Text";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

type SchemaType = yup.InferType<typeof schema>;

export default function EmailGatherForm({
  hideFormFn,
}: {
  hideFormFn?: () => void;
}) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SchemaType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("collect email", data.email);
          resolve(void 0);
        }, 2000);
      });

      // Show success message
      setIsSuccess(true);

      // Hide form after 2 seconds
      setTimeout(() => {
        if (hideFormFn) {
          hideFormFn();
        }
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  // Show success message instead of form
  if (isSuccess) {
    return (
      <div className={styles.form}>
        <Text size="small">
          Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας σύντομα.
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button
        onClick={() => {
          if (hideFormFn) {
            hideFormFn();
          }
        }}
        className={styles.closeButton}
      >
        <Close />
      </button>
      <Text size="small" className={styles.description}>
        Συμπλήρωσε το email σου και θα επικοινωνήσουμε μαζί σου.
      </Text>
      <Input
        label=""
        placeholder="Email"
        name="email"
        control={control}
        className={styles.emailInput}
      />
      <Button
        type="submit"
        isFullWidth
        size="medium"
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      >
        Υποβολή
      </Button>
    </form>
  );
}
