import React, { FC, useMemo } from "react";
import { Container, Toolbar } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Title from "../../../components/Title/Title";
import PaymentForm from "@/components/PaymentForm/PaymentForm";

const stripePublicKey = process.env.NEXT_PUBLIC_Payment_Gateway_Stripe;
if (!stripePublicKey) {
  throw new Error("Stripe public key is not defined in environment variables");
}

const stripePromise = loadStripe(stripePublicKey);

const Payment: FC = () => {
  const stripe = useMemo(() => stripePromise, []);

  return (
    <div style={{ height: "100vh" }}>
      <Toolbar />
      <Toolbar />
      <Title title="Payment" />
      <Container maxWidth="sm" sx={{ mb: "2rem" }}>
        <Toolbar />
        <Elements stripe={stripe}>
          <PaymentForm />
        </Elements>
      </Container>
    </div>
  );
};

export default Payment;
