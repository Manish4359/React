import React from "react";


import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";

import { CollectionPageContainer,Item,ItemContainer,Title } from "./collection.styles";

import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
    //console.log(obj)
    const { title, items } = collection;
 
    return (
        <CollectionPageContainer>
            <Title>{title}</Title>
            <ItemContainer>
                {items.map((item, index) => (<Item key={item.id}><CollectionItem  item={item} /></Item>))}

            </ItemContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);