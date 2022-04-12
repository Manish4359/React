import styled, { css } from "styled-components";



const incBackground=`rgb(0, 255, 21)`
const decBackground=`red`

const btn = background=> css`
position: relative;
width: 25px;
height: 25px;
border: none;
border-radius: 50%;
background-color: rgb(255, 255, 255);
cursor: pointer;
font-weight: 600;
display: grid;
place-items: center;
transition: all 0.3s


&:hover{
    background:${background};
    transform: scale(1.25);
    
    &> div {
        background-color: white;
        
        &::before {
            background-color: white;
        }
    }
}

`


export const ProductContainer = styled.div`

    position: relative;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    //border-radius: 10px;
    //background: #a985e6;
    margin: 10px 0;
    color: white;
    transition: all 0.4s;
    overflow:hidden;
    background: #444;

    
    & > :last-child{
        display: none;
    }

    &:hover {
        //transform: translateX(-70px);
        
        //color: white;
    
        & > :last-child{
            display: block;
            background-color: red;
            
        }
    }
`
export const Product = styled.div`
    width: 40%;
    //margin-right: 20px;
    display:flex;
    justify-content:center;
    align-items:center;



    & > img {
        height: 100px;
        width: 100px;
        margin-right:10px;
    }

    & >span{
        text-transform: capitalize;
        width: 40%;
        font-weight: 400;
        font-size: 20px;
        font-size:16px;
    }
    `

export const ProductDetails = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: baseline;
    padding: 5px;`

 

export const ProductPrice = styled.span`
    font-size: 20px;`

export const ProductPriceTotal=styled.span`
    font-size: 20px;`
    
export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    
    &>span{
        border:1px solid #ccc;
        padding:0 10px;
        margin:0 5px;
        background:white;
        color:black;
        font-weight:500;
    }
    `

export const ProductRemoveBtn = styled.div`
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
        //padding: 2px;
        height: 100%;
        width: 70px;
        //border-radius: 50%;
        //background-color: red;
        transition: all 0.4s;

        &:hover {
            //transform: scale(1.03);
           
            //background-color: red;

            &>div {
                background-color: white;

                &::after {
                    background-color: white;
                }
            }
        }
`
export const RemoveIcon=styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    width: 30px;
    height: 3px;

    background-color: black;
    transform: translate(-50%, -50%) rotateZ(45deg);

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;

        width: 30px;
        height: 3px;

        background-color: black;
        transform: translate(-50%, -50%) rotateZ(90deg);
    }`
export const ProductIncreaseBtn = styled.div`${btn(incBackground)}`
export const ProductDecreaseBtn = styled.div` ${btn(decBackground)}`



const icon=css`
    height:10px;
    width:10px;
`

export const IncreaseIcon = styled.img`${icon}`
export const DecreaseIcon = styled.img`${icon}`
