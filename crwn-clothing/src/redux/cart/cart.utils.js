export const addItemsToCart = (cartItems, addToCart) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === addToCart.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === addToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItems
    );
  }
  return [...cartItems, { ...addToCart, quantity: 1 }];
};
