import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { PayButton } from './stripe-checkout-form.styles';


const CheckoutForm = (props) => {
    // const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    console.log(props)

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
            
            <input type='email' placeholder='your@email.com' required/>
            <PaymentElement  />
    
            <PayButton>Pay</PayButton>
        </form>

    );
}; 

const mapStateToProps=createStructuredSelector({
    user:selectCurrentUser
})
export default connect(mapStateToProps)(CheckoutForm);