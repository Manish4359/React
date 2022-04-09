import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";


import { CollectionItemContainer,CollectionItemFooter,Image,Name,Price } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <Image
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></Image>
      <CustomButton onClick={() => addItem(item)} addtocartbutton>
        ADD TO CART
      </CustomButton>
      <CollectionItemFooter>
        <Name>{name}</Name>
        <Price active={'active'}>&#8377;{price}</Price>
      </CollectionItemFooter>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
