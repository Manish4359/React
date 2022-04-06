import React from "react";

import './collection.styles.scss'

import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
    //console.log(obj)
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item, index) => (<div className="item" key={item.id}><CollectionItem  item={item} /></div>))}

            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);