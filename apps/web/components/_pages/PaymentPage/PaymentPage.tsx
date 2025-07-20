import CheckoutForm from "@/components/_pages/PaymentPage/CheckoutForm";
import IntentForm from "@/components/_pages/PaymentPage/IntentForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import usePageResolver from "@/hooks/usePageResolver";
import { useContentful } from "@/stores/ContentfulStore";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { useState } from "react";
import styles from "./PaymentPage.module.scss";
import WorkearlyVideo from "@/components/WorkearlyVideo/WorkearlyVideo";
import Text from "@/components/Text";
import FormCourseDetails from "../FormCourseDetails/FormCourseDetails";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const GREEN_500 = "hsl(86 100% 72%)";
const BLACK_500 = "hsl(0 0% 8%)";
const NEUTRAL_500 = "hsl(0 0% 100%)";
const BORDER_MUTED = "hsl(0 0% 8% / 0.3)";
const NEUTRAL_300 = "hsl(60 40% 96%)";

const appearance: Appearance = {
  variables: {
    borderRadius: "0.5rem",
    colorPrimary: BLACK_500,
    colorText: BLACK_500,
    colorBackground: NEUTRAL_500,
    accordionItemSpacing: "0.25rem",
  },
  rules: {
    ".AccordionItem": {
      backgroundColor: NEUTRAL_300,
      boxShadow: "none",
      border: "none",
    },
    ".AccordionItem--selected": {
      backgroundColor: NEUTRAL_500,
    },
    ".Input": {
      borderRadius: "0.3125rem",
      padding: "0.28rem 0.625rem",
      border: `1px solid ${BORDER_MUTED}`,
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5rem",
      letterSpacing: "-0.02rem",
    },
    ".Label": {
      marginBottom: "0.38rem",
    },
    ".RadioIcon": {
      width: "1rem",
    },
    ".RadioIconOuter--checked": {
      stroke: BLACK_500,
      fill: GREEN_500,
    },
    ".RadioIconInner--checked": {
      fill: BLACK_500,
    },
  },
};

type PropsType = {
  className?: string;
};

export default function PaymentPage({ className }: PropsType) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { page } = useContentful();
  const { courseDetails, tags } = usePageResolver(page);

  const category = tags.find((tag) => tag?.id?.startsWith("courseCategory"));

  return (
    <main className={clsx(styles.root, className)}>
      <NextSeo
        additionalMetaTags={[
          {
            name: "trackCourse",
            content: courseDetails?.title || "",
          },
          {
            name: "trackCategory",
            content: category?.id || "",
          },
          {
            name: "trackPrice",
            content: courseDetails?.finalCost?.toString() || "",
          },
        ]}
      />
      <Breadcrumbs
        className={styles.breadcrumbs}
        items={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: page.name || "", href: `/${page.slug}` },
        ]}
      />
      <div className={styles.content}>
        <WorkearlyVideo />
        <div>
          <FormCourseDetails />
          {clientSecret ? (
            <Elements
              stripe={stripePromise}
              options={{ clientSecret, appearance }}
            >
              <CheckoutForm />
            </Elements>
          ) : (
            <IntentForm onSuccess={setClientSecret} />
          )}
        </div>
      </div>
    </main>
  );
}
