import React from "react";
import CartItem from "../cart-item/cart-item.component";

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem:{price,quantity,name,imageUrl}}) => (
    <div className="product">
        <div className="product-image">

            <img className="image" src={imageUrl} alt="product image" />
        </div>

        <div className="product-details">

            <div className="product-name">{name}</div>
            <span className="product-price">&#8377;{price}</span>

            <div className="product-quantity">
                <div className="btn">
                    <div className="btn-dec">-</div> 
                </div>

                <span className="quantity">{quantity}</span>
                <div className="btn" >
                    <div className="btn-inc">+</div>
                </div>
            </div>

        </div>
        <div className="product-remove">
            <div className="close"></div>
        </div>
    </div>
);

export default CheckoutItem;