const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');

const http = require('http');

const cors = require('cors')

const app = express();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
app.use(cors());

app.use(express.json());
app.use(express.static("public"));



app.post('/create-payment-intent', async (req, res) => {

    const totalAmount = req.body.total;
    

    // Create a PaymentIntent with the order amount and currency
    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount*100,
            currency: "INR",
            

        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.log(error)
    } 

})


app.listen(7000, () => console.log('server running in port 7000'));
