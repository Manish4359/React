import CartActionTypes from "./cart.types";
import { addItemsToCart } from "./cart.utils";
import { deleteItemsFromCart } from "./cart.utils";

import { removeItemsFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      };

      case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload)
      };

    case CartActionTypes.DELETE_ITEM:
      return{
        ...state,
        cartItems:deleteItemsFromCart(state.cartItems,action.payload)
      }

    default:
      return state;
  }
};

export default cartReducer;
