import React from "react";

import { CartItemContainer,ItemDetails } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} />
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity}x{price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}
export default CartItem;    