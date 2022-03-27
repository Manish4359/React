import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

import CartItem from './../cart-item/cart-item.component'

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toogleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems, history, dispatch }) => (

  <div className="cart-dropdown">

    <div className="cart-items">

      {cartItems.length !== 0 ?
        (cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)) :
        <span className="empty-message">cart is empty</span>}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toogleCartHidden())}
    }
    >Go To CheckOut</CustomButton>
  </div >
);
const mapStateToProps = createStructuredSelector({

  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
