import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map((item, index) => {
        {
          if (index > 3) return;
        }

        return <div className="item" key={item.id}><CollectionItem  item={item} /></div>;

      })}
    </div>
  </div>
);

export default CollectionPreview;
