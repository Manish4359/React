import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, custom, ...otherProps }) => (
  <button className={`${custom} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
