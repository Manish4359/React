import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import { removeItems } from "../../redux/cart/cart.actions";
import { deleteItems } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem,deleteItem,addItem,removeItem}) => {
    const {price,quantity,name,imageUrl}=cartItem;
    return (
    <div className="product">
        <div className="product-image">

            <img className="image" src={imageUrl} alt="product image" />
        </div>

        <div className="product-details">

            <div className="product-name">{name}</div>
            <span className="product-price">&#8377;{price}</span>

            <div className="product-quantity">
                <div className="btn btn-d" onClick={cartItem.quantity>1?()=>removeItem(cartItem):()=>deleteItem(cartItem)}>
                    <div className="btn-dec"></div> 
                </div>

                <span className="quantity">{quantity}</span>
                <div className="btn btn-i" onClick={()=>addItem(cartItem)}>
                    <div className="btn-inc"></div>
                </div>
            </div>

        </div>
        <div className="product-remove" onClick={()=>deleteItem(cartItem)}>
            <div className="close"></div>
        </div>
    </div>
)};

const mapDispatchToProps=dispatch=>({
    addItem:(item)=>dispatch(addItem(item)),
    removeItem:(item)=>dispatch(removeItems(item)),
    deleteItem:(item)=>dispatch(deleteItems(item))

})

export default connect(null,mapDispatchToProps)(CheckoutItem);