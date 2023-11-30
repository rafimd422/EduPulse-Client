import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Button, Container } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useContext } from "react";
import loading from "../../assets/Loading/loading.json";
import swal from "sweetalert";
import Lottie from "lottie-react";
import useCourseData from "@/hooks/useCourseData";
import { AuthContext } from "@/Provider/AuthProvider";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const { dataForPayment, isLoading } = useCourseData(router);
  const { user } = useContext(AuthContext);

  if (dataForPayment === undefined) {
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

  if (isLoading) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("[error]", error);
        swal(`${error.type}`, `${error.message}`, "error");
      } else {
        console.log("[PaymentMethod]", paymentMethod);
      }

      const response = await axiosSecure.post("/create-payment-intent", {
        price: dataForPayment?.price,
      });

      const { paymentIntent, error: newError } =
        await stripe.confirmCardPayment(response.data?.clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        });

      if (newError) {
        console.log("confirm", newError);
      } else {
        console.log("paymentIntent", paymentIntent);
        const enrollData = {
          name: user?.displayName,
          email: user?.email,
          transecitonId: paymentIntent?.id,
          paidAmount: parseInt(dataForPayment?.price),
          teacher: dataForPayment?.teacher,
          teacherImg: dataForPayment?.userImage,
          courseTitle: dataForPayment?.title,
          courseTitle: dataForPayment?.shortDesc,
          coursethumbnall: dataForPayment?.image,
        };

        const postEnroll = await axiosSecure.post("/enrolled", enrollData);
        if (postEnroll.data.insertedId) {
          swal(
            "success",
            `Your Transection id ${paymentIntent?.id}`,
            "success"
          );
        }
        router.push("/dashboard/student/enrollclass");
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
