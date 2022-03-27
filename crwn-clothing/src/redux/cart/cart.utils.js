export const addItemsToCart = (cartItems, addToCart) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === addToCart.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === addToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addToCart, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, removeFromCart) => {
  
    return cartItems.map(cartItem=>cartItem.id === removeFromCart.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem)
  
};

export const deleteItemsFromCart = (cartItems, deleteFromCart) => {
  return cartItems.filter((cartItem) =>
      cartItem.id !== deleteFromCart.id
    );
};
