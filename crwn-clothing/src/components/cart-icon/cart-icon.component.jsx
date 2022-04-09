import React from "react";
import { connect } from "react-redux";

import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingBag } from "./../../assets/shopping-bag.svg";

import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = ({ toogleCartHidden, itemCount }) => {

  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span>{itemCount}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})
const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
