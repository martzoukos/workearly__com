import { Input } from "@/components/_sections/Form/FormPrimitives";
import Button from "@/components/Button";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { ChevronRight } from "@carbon/icons-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm, Control } from "react-hook-form";
import * as yup from "yup";
import styles from "./IntentForm.module.scss";
import FormTOC from "../FormTOC/FormTOC";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms").required(),
});

type SchemaType = yup.InferType<typeof schema>;

type PropsType = {
  onSuccess: (clientSecret: string) => void;
};

export default function IntentForm({ onSuccess }: PropsType) {
  const router = useRouter();
  const { page, endDates } = useContentful();
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
      terms: false,
    },
  });

  const onSubmit = async (data: SchemaType) => {
    try {
      if (!courseDetails) {
        throw new Error("Course details not found");
      }

      const applicationStartDate = endDates.find(
        (d) => d.name === `group${courseDetails.group}`,
      )?.date;

      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          applicationStartDate,
          courseDetailsId: courseDetails.sys.id,
          siteTransaction: true,
          onDemand: courseDetails.onDemand,
        }),
      });
      const json = await response.json();
      onSuccess(json.clientSecret);
    } catch (error) {
      console.error(error);
      router.push("/payment/failure");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <Input label="Name" placeholder="Name" name="name" control={control} />
      <Input label="Email" placeholder="Email" name="email" control={control} />
      <FormTOC control={control as unknown as Control<Record<string, any>>} />
      <Button
        type="submit"
        isFullWidth
        size="medium"
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      >
        Next <ChevronRight />
      </Button>
    </form>
  );
}
