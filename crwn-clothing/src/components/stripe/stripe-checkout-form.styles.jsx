import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const PayButton=styled(CustomButton)`
    width:100%;
    margin:10px auto;
    
    &:hover{
        transform:translateY(0);
    }
`