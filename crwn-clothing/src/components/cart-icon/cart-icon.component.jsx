import React from "react";
import { connect } from "react-redux";

import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingBag } from "./../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toogleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">5</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);