import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ CartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />

    <CustomButton />
  </div>
);
/*const mapStateToProps = (cartItem) => ({
  CartItems: () =>
    cartItem
      .map(({ name, price }) => (
        <div>
          <div>{name}</div>
          <div>{price}</div>
        </div>
      ))
      .split(""),
});*/
export default connect(null)(CartDropdown);
