import React from "react";
import { withRouter } from "react-router-dom";

import {MenuItemContainer,BackgroundImage,ContentTitle,Content,ContentSubtitle} from './menu-item.styles'

const MenuItem = ({ key, title, imageUrl, size, history, linkUrl, match }) => (
  /*<div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >

    </div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>*/
  <MenuItemContainer size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage
      style={{ backgroundImage: `url(${imageUrl})` }}
    >

    </BackgroundImage>
    <Content>
      <ContentTitle>{title}</ContentTitle>
      <ContentSubtitle>shop now</ContentSubtitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
