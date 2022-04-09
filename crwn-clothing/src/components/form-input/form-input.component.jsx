import React from "react";

import { GroupContainer,FormInputField,InputLabel } from "./form-input.styles";
const FormInput = ({ handleChange, label, ...otherProps }) => (
 
  <GroupContainer>
    <FormInputField onChange={handleChange} {...otherProps} />
    {label ? (
      <InputLabel
        shrink={
          otherProps.value.length ? "shrink" : ""
        }
      >
        {label}
      </InputLabel>
    ) : null}
    
  </GroupContainer>
);

export default FormInput;
