import React, { useContext } from "react";
import { Button, Container } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import swal from "sweetalert";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCourseData from "@/hooks/useCourseData";
import { AuthContext } from "@/Provider/auth-provider";
import dynamic from "next/dynamic";
import type { StripeCardElement } from "@stripe/stripe-js";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loading from "../../assets/Loading/loading.json";

interface EnrollData {
  name: string | null | undefined;
  email: string | null | undefined;
  transecitonId: string;
  paidAmount: number;
  teacher: string;
  teacherImg: string;
  courseTitle: string;
  coursethumbnall: string;
}

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const { dataForPayment, isLoading } = useCourseData(router);
  const { user }: any = useContext(AuthContext);

  const isDataUnavailable = isLoading || dataForPayment === undefined;

  if (isDataUnavailable) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={loading} />
      </Container>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (!card) return;

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: card as StripeCardElement,
      });

      if (error) {
        console.error("[Stripe Error]", error);
        swal(`${error.type}`, `${error.message}`, "error");
        return;
      }

      console.log("[PaymentMethod]", paymentMethod);

      const response = await axiosSecure.post("/create-payment-intent", {
        price: dataForPayment?.price,
      });

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(response.data?.clientSecret, {
          payment_method: {
            card: card as StripeCardElement,
            billing_details: {
              email: user?.email || "",
              name: user?.displayName || "",
            },
          },
        });

      if (confirmError) {
        console.error("Confirm error", confirmError);
        return;
      }

      if (!paymentIntent) return;

      const enrollData: EnrollData = {
        name: user?.displayName,
        email: user?.email,
        transecitonId: paymentIntent.id,
        paidAmount: parseInt(dataForPayment?.price),
        teacher: dataForPayment?.teacher,
        teacherImg: dataForPayment?.userImage,
        courseTitle: dataForPayment?.title,
        coursethumbnall: dataForPayment?.image,
      };

      const postEnroll = await axiosSecure.post("/enrolled", enrollData);

      if (postEnroll.data.insertedId) {
        swal("Success", `Your transaction ID: ${paymentIntent.id}`, "success");
        router.push("/dashboard/student/enrollclass");
      }
    } catch (err) {
      console.error("Unexpected error during payment:", err);
      swal("Error", "An error occurred during payment processing.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "black",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <Button
        sx={{ mt: "1.4rem", px: "1.5rem" }}
        variant="contained"
        color="success"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </Button>
    </form>
  );
};

export default PaymentForm;
