import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "./../../assets/logo.svg";

const Header = () => (
  <div className="header">
    <link className="logo-container" to="/"></link>
    <Logo className="logo" />
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/Contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
