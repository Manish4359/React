import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/logo.svg";


import CartIcon from "../cart-icon/cart-icon.component";

export const LogoLink=styled(Link)`
height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 10px;
`

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 25px;
`
export const LogoContainer = styled(Logo)`
position: relative;
top:50%;
left: 50%;
transform: translate(-50%,-50%);
`
export const OptionsContainer = styled.div`
    padding: 5px 10px;
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    background: #2FF3E0;
    border-radius: 10px;
`

export const OptionLink = styled(Link)`
padding: 10px 15px;
transition: all 0.5s;
font-weight: 600;

&:hover{
    background-color: #F8D210;
    border-radius: 10px;
  }
`


export const OptionCartIcon=styled(CartIcon)`
&:hover{
    border-radius: 10px;
    background-color: #F8D210;
  }
`