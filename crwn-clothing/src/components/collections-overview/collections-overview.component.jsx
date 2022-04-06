import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './collections-overview.styles.scss';

import CollectionPreview from './../collection-preview/collection-preview.component'
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";


const CollectionsOverview = ({collections}) => {

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
  
      </div>)
  
  
  }
  const mapStateToProps=createStructuredSelector({
    collections:selectShopCollectionsForPreview
  })
  export default connect(mapStateToProps)(CollectionsOverview);
  