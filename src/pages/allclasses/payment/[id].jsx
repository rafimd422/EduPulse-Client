import Title from "../../../components/Title/Title";
import { Container } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Toolbar } from "@mui/material";
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_Payment_Gateway_Stripe);
const Payment = () => {
  return (
    <div style={{height:'100vh'}}>
      <Toolbar />
      <Toolbar />
      <Title title={"Payment"} />
      <Container maxWidth='sm' sx={{mb:'2rem'}}>
        <Toolbar />
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>{" "}
      </Container>
    </div>
  );
};

export default Payment;
