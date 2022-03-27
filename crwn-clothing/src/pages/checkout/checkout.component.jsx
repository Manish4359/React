import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, cartItemsTotal }) => (
    <div className="checkout">

        <div className="cart">
                {
                cartItems.length?
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>):
                <span>Your cart is Empty !!!</span>}
        </div>

        {cartItems.length?
        <div className="price-details">
            <h3 >price details({cartItemsTotal} items)</h3>
            <div className="prices">
                <div className="detail-type">price</div>
                <span>&#8377;{total}</span>

            </div>
            <div className="prices">
                <div className="detail-type">discount</div>
                <span>-&#8377;40</span>

            </div>
            <div className="prices">
                <div className="detail-type">delivery charges</div>
                <span>&#8377;0</span>

            </div>
            <div className="prices price-total">
                <div className="detail-type">total price</div>
                <span>&#8377;{total}</span>

            </div>

        </div>:""}
    </div>
)
const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsCount,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);