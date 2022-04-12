import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer,Title,Item,Preview } from "./collection-preview.styles";



const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items.map((item, index) => {
        {
          if (index > 3) return;
        }

        return <Item key={item.id}><CollectionItem  item={item} /></Item>;

      })}



    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
