import React, { useState, useEffect } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './stripe-checkout-form';

const PUBLIC_KEY = 'pk_test_51KlmdUSJjE82jdUgWyyddFGp6CP5BHfttKtivrZHpwHlnFFJUVJ1waFSNFf14yUFS2Kq0lviVO0xmuQCypNQ8Xhx00lteVB98a';

const stripePromise = loadStripe(PUBLIC_KEY);

function StripePayment(props) {

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {

    fetch('http://localhost:7000/create-payment-intent', {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({total:props.price}),
    })
      .then((res) =>
        res.json()
      )
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err))
  }, []);


  const options = {
    theme: 'stripe',
    clientSecret
  };



  return (
    clientSecret ?
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm/>
      </Elements>
      : ""
  );
};

export default StripePayment;