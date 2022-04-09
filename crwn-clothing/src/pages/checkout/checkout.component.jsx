import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { CheckoutContainer, CartContainer, PriceDetailsText, Price, PriceContainer } from "./checkout.styles";

const CheckoutPage = ({ cartItems, total, cartItemsTotal }) => (
    <CheckoutContainer>

        {
            cartItems.length ?
                (<CartContainer>
                {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                </CartContainer>) :
                <span>Your cart is Empty !!!</span>
        }

        {cartItems.length ?
            <PriceContainer>
                <PriceDetailsText>price details({cartItemsTotal} items)</PriceDetailsText>
                <Price>
                    <div >price</div>
                    <span>&#8377;{total}</span>

                </Price>
                <Price>
                    <div >discount</div>
                    <span>-&#8377;40</span>

                </Price>
                <Price>
                    <div >delivery charges</div>
                    <span>&#8377;0</span>

                </Price>
                <Price>
                    <div >total price</div>
                    <span>&#8377;{total}</span>

                </Price>
                <StripeCheckoutButton price={total} />

                <div className="test-warning">
                    <br />
                    <br />
                    **use these test card details**
                    <br />
                    4242424242424242 ; date-any future ; date cv-any 3 digit number
                </div>
            </PriceContainer> : ""}
    </CheckoutContainer>
)
const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsCount,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);