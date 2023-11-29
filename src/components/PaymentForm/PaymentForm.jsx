import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import swal from 'sweetalert';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {

        return;
      }
  
      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        swal(`${error.type}`, `${error.message}`, "error");
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
  
  return (
    <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '20px',
            color: '#424770',
            '::placeholder': {
              color: 'black',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <Button sx={{mt:'1.4rem', px:'1.5rem'}} variant='contained' color='success' type="submit" disabled={!stripe}>
      Pay
    </Button>
  </form>
  )
}

export default PaymentForm
