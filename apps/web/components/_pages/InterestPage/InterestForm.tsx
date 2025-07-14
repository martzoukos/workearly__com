import { Input } from "@/components/_sections/Form/FormPrimitives";
import Button from "@/components/Button";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import useTranslate from "@/hooks/useTranslate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./InterestForm.module.scss";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
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
  });

  const onSubmit = async (data: SchemaType) => {
    try {
      if (!courseDetails) {
        throw new Error("Course details not found");
      }
      // TODO: implement integration with webhook
      console.log("Submit interest form with data: ", data);
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
      <Button
        type="submit"
        isFullWidth
        size="medium"
        disabled={!isValid}
        isLoading={isSubmitting}
      >
        {translate("InterestFormCTA2")}
      </Button>
    </form>
  );
}
