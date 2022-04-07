import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KlmdUSJjE82jdUgWyyddFGp6CP5BHfttKtivrZHpwHlnFFJUVJ1waFSNFf14yUFS2Kq0lviVO0xmuQCypNQ8Xhx00lteVB98a"

    const ontoken=token=>{
        alert("payment success");
    }
    
    return (
        <StripeCheckout
            label="pay now"
            name="crown-cloth"
            billingAddress
            shippingAddress
            currency="INR"
            image=""
            description={`your total price ${price}`}
            amount={priceForStripe}
            panelLabel="pay now"
            token={ontoken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;