import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { PayButton } from './stripe-checkout-form.styles';


const CheckoutForm = () => {
    // const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(e);





        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/'
            }
        });

        if(error){
            console.log(error);
        }
    }

    return (

        <form id="payment-form" onSubmit={handleSubmit}>
            
            <PaymentElement  />
    
            <PayButton>Pay</PayButton>
        </form>

    );
}; 

export default CheckoutForm;