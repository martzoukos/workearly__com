import Button from "@/components/Button";
import Shell from "@/components/Shell";
import Text from "@/components/Text";
import useShellResolver from "@/hooks/useShellResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import { QueryItem } from "@workearly/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import styles from "./Form.module.scss";
import { Checkbox, Input, Textarea } from "./FormPrimitives";
import Link from "next/link";

type PropsType = {
  className?: string;
  section: QueryItem["Section"];
};

const schema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  surname: Yup.string().trim().required("Surname is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  mobile: Yup.string().trim().required("Mobile number is required"),
  message: Yup.string().trim().required("Message is required"),
  agreePrivacy: Yup.boolean().oneOf(
    [true],
    "You must agree to the privacy policy",
  ),
  agreeMarketing: Yup.boolean().default(false),
});

type SchemaType = Yup.InferType<typeof schema>;

export default function Form({ section }: PropsType) {
  const router = useRouter();
  const shell = useShellResolver(section);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      message: "",
      agreePrivacy: false,
      agreeMarketing: false,
    },
  });

  async function onSubmit(data: SchemaType) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, pageName: router.asPath }),
      });

      if (response.ok) {
        // Clear form fields
        reset();
        router.push("/contact/success");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Shell.Root {...shell} className={styles.root}>
      <header className={styles.header}>
        <Text as="h2">{section.title}</Text>
        <Text>{section.text}</Text>
      </header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name" placeholder="Name" name="name" control={control} />
        <Input
          label="Surname"
          placeholder="Surname"
          name="surname"
          control={control}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email Address"
          control={control}
        />
        <Input
          label="Mobile Number"
          name="mobile"
          type="tel"
          placeholder="Mobile Number"
          control={control}
        />
        <Textarea
          label="Message"
          name="message"
          control={control}
          placeholder="Message"
          className={styles.textarea}
        />
        <div className={styles.checkboxContainer}>
          <Checkbox
            name="agreePrivacy"
            control={control}
            label={
              <>
                You agree with our{" "}
                <Button variant="Underlined" asChild>
                  <Link href="/data-policy">Privacy Policy</Link>
                </Button>
              </>
            }
          />

          <Checkbox
            label="You agree that your data will be used for marketing purposes"
            name="agreeMarketing"
            control={control}
          />
        </div>
        <Button
          type="submit"
          isFullWidth
          className={styles.submitButton}
          size="medium"
          isLoading={isSubmitting}
          disabled={!isValid}
        >
          Submit Message
        </Button>
      </form>
    </Shell.Root>
  );
}
