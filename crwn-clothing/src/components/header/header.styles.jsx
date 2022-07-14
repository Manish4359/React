import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/logo.svg";


import CartIcon from "../cart-icon/cart-icon.component";

export const LogoLink = styled(Link)`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 10px;

    @media only screen and (max-width: 460px) {
      & {
       margin:10px auto;
      }
    }
`

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 25px;

    @media only screen and (max-width: 460px) {
      & {
       flex-direction:column;
       height:auto;
      }
    }
`
export const LogoContainer = styled(Logo)`
  height:fit-content;
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
    
    background: #a985e6;
    border-radius: 10px;
`

export const OptionLink = styled(Link)`
padding:${props => props.cart ? "" : '10px 15px'};
font-weight: 600;
color:white;
&:hover{
    background-color: #000;
    border-radius: 10px;
  }

  @media only screen and (max-width: 400px) {
    
    ${props => props.type ? 'display:none' : ""}


  }
`


export const OptionCartIcon = styled(CartIcon)`


&:hover{
    border-radius: 10px;
    fill:#a985e6;
    background-color: #F8D210;
  }
`