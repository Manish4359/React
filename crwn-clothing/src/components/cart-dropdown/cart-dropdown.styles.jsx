import styled,{ keyframes } from "styled-components";


 const cartdropdownAnimation=keyframes`

    100%{
      top: 125px;
      opacity: 1;
    }
  
`
export const CartDropdownContainer=styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 80px;
    z-index: 5;
    border-radius: 10px;
    opacity: 0;
    animation: ${cartdropdownAnimation} 0.5s forwards;

    & > button {
        margin-top: auto;
    }

`

export const CartItems=styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;

    & > span{
        margin: 50px auto;
    }
`

