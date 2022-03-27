import CartActionTypes from "./cart.types";

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItems = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const deleteItems = (item) => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item,
});

