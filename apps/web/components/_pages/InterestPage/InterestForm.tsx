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
  const {
    control,
    handleSubmit,
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
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      router.push(`/interest/success/${page.slug}`);
    } catch (error) {
      console.error(error);
      router.push("/interest/failure");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <p>{translate("InterestFormDescription")}</p>
      <Input label="Name" placeholder="Name" name="name" control={control} />
      <Input label="Email" placeholder="Email" name="email" control={control} />
      <Input
        label={translate("FormPhoneLabel")}
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
    </form>
  );
}
