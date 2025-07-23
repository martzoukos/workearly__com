import { Input } from "@/components/_sections/Form/FormPrimitives";
import Button from "@/components/Button";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import useTranslate from "@/hooks/useTranslate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm, Control } from "react-hook-form";
import * as yup from "yup";
import styles from "./InterestForm.module.scss";
import FormTOC from "../FormTOC/FormTOC";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  other: yup.string(),
  terms: yup.boolean().oneOf([true], "You must accept the terms").required(),
});

type SchemaType = yup.InferType<typeof schema>;

export default function InterestForm() {
  const router = useRouter();
  const { page } = useContentful();
  const { translate } = useTranslate();
  const { courseDetails } = usePageResolver(page);
  const [formResult, setFormResult] = useState<"success" | "error" | null>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      other: "",
      terms: false,
    },
  });

  const onSubmit = async (data: SchemaType) => {
    try {
      if (!courseDetails) {
        throw new Error("Course details not found");
      }
      // Submit the webhook to make.com to send the email
      const response = await fetch(
        "https://hook.eu2.make.com/3uoeut024t7dl9p3kdblq695fw1vmubm",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            other: data.other,
            courseTitle: courseDetails.title,
            courseId: courseDetails.id,
            hubspotDealType: courseDetails.hubspotDealType,
          }),
        },
      );
      setFormResult("success");

      // Clear form fields
      reset();

      if (!response.ok) {
        setFormResult("error");
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setFormResult("error");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <p>{translate("InterestFormDescription")}</p>
      <Input label="Name *" placeholder="Name" name="name" control={control} />
      <Input
        label="Email *"
        placeholder="Email"
        name="email"
        control={control}
      />
      <Input
        label={translate("FormPhoneLabel") + " *"}
        placeholder={translate("FormPhoneLabel")}
        name="phone"
        control={control}
      />
      <Input
        label={"Άλλες πληροφορίες / Εκπτωτικός Κωδικός"}
        placeholder={"Άλλες πληροφορίες / Εκπτωτικός Κωδικός"}
        name="other"
        control={control}
      />
      <FormTOC control={control as unknown as Control<Record<string, any>>} />
      <Button
        type="submit"
        isFullWidth
        size="medium"
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      >
        {translate("InterestFormCTA2")}
      </Button>
      {formResult ? (
        <div>
          {formResult === "error" && (
            <p className={styles.error}>
              Αποτυχία αποστολής. Παρακαλώ δοκιμάστε ξανά.
            </p>
          )}
          {formResult === "success" && (
            <p className={styles.success}>
              Η εκδήλωση ενδιαφέροντος στάλθηκε επιτυχώς! Θα επικοινωνήσουμε
              σύντομα μαζί σου!
            </p>
          )}
        </div>
      ) : null}
    </form>
  );
}
