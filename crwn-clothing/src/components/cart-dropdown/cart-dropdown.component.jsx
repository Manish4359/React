import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CartItem from './../cart-item/cart-item.component'

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toogleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";


import { CartDropdownContainer,CartItems } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (

  <CartDropdownContainer>

    <CartItems>

      {cartItems.length !== 0 ?
        (cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)) :
        <span className="empty-message">cart is empty</span>}
        
    </CartItems>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toogleCartHidden())}
    }
    >Go To CheckOut</CustomButton>
  </CartDropdownContainer >
);
const mapStateToProps = createStructuredSelector({

  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
