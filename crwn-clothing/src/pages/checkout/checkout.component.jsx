import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripePayment from "../../components/stripe/stripe";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import CustomButton from "../../components/custom-button/custom-button.component";

import { CheckoutContainer, CartContainer, PriceContainerHeading,TestData, Price, PriceContainer, CartEmptyContainer, CartContainerHeading, ProductHeading,Summary } from "./checkout.styles";

import emptycart from './../../assets/empty-cart.svg'

const CheckoutPage = ({ cartItems, total, cartItemsTotal, history }) => (
    <CheckoutContainer cartLength={cartItems.length}>

        {
            cartItems.length > 0 ?
                (<CartContainer cartLength={cartItems.length}>
                    <CartContainerHeading>
                        <span>Shopping cart</span>
                        <span>{cartItemsTotal} item{cartItemsTotal > 1 ? "s" : ""}</span>
                    </CartContainerHeading>
                    <ProductHeading>
                        <div>
                            <span>Product</span>
                        </div>
                        <div>
                            <span>Quantity</span>
                            <span>Price</span>
                            <span>Total</span>
                        </div>
                    </ProductHeading>
                    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                    <CustomButton onClick={() => history.push('/shop')}>&#8592;  continue Shopping</CustomButton>
                </CartContainer>) :
                <CartEmptyContainer>
                    <img src={emptycart} alt='empty cart'/>
                    <span>Your cart is Empty !!!</span>
                    <span>Add you items now</span>
                    <CustomButton onClick={() => history.push('/shop')}>Shop Now</CustomButton>
                </CartEmptyContainer>
        }

        {cartItems.length ?
        <Summary>

                <PriceContainerHeading>Summary</PriceContainerHeading>
            <PriceContainer>
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
                {/*<StripeCheckoutButton price={total} />*/}
            </PriceContainer>


                <StripePayment price={total}/>
                <TestData>
                    <span>4242424242424242</span>
                    <span>Any future date</span>
                    <span>Any 3 digit number</span>
                </TestData>
        </Summary>: ""}
    </CheckoutContainer>
)
const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsCount,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);