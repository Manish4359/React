import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  googleSignIn,
  addtocartbutton,
  ...otherProps
}) => (
  <button
    className={`${googleSignIn ? googleSignIn : " "} 
    ${addtocartbutton ? "addtocartbutton" : ""}
      custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
