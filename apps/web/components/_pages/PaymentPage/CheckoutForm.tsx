import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Text from "@/components/Text";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import styles from "./CheckoutForm.module.scss";

export default function CheckoutForm() {
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/success`,
      },
    });

    if (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  }

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <Text as="h6">Payment Method</Text>
      <PaymentElement
        options={{
          layout: {
            type: "accordion",
            spacedAccordionItems: true,
          },
        }}
      />
      <Checkbox
        checked={agree}
        onCheckedChange={(checked) => setAgree(Boolean(checked))}
      >
        <Text as="small">
          I agree to WORKEARLY LTD’s Terms of Service and Privacy Policy
        </Text>
      </Checkbox>
      <Button
        type="submit"
        isFullWidth
        size="medium"
        disabled={!agree}
        isLoading={isSubmitting}
      >
        Pay
      </Button>
    </form>
  );
}
