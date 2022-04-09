import styled from "styled-components";

export const CheckoutContainer=styled.div`
    display: flex;
    justify-content: space-between;
    transition: all 0.5s;
`

export const CartContainer=styled.div`
    width: 60%;
    height: 71.3vh;
    overflow:auto;
    overflow-x: hidden;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgb(231, 231, 231), -3px -3px 20px rgb(230, 230, 230);
`

export const PriceContainer=styled.div`
    width: 25%;
    height: 300px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgb(231, 231, 231);
`

export const PriceDetailsText=styled.h3`
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 1px solid black;
    padding: 10px 0;

    
`


export const Price=styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;

    & >div{
        text-transform: uppercase;
    }

    &> span{
        justify-items: baseline;
        width: 20%;
        padding: 0 10px;
    }
    & > {
        margin-bottom: 10px;
    }
`
