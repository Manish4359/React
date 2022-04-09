import styled, { css } from "styled-components";



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
    ${background};
    transform: scale(1.25);
    
    &> div {
        background-color: white;
        
        &::before {
            background-color: white;
        }
    }
}

`

const incBackground=css`background-color: rgb(0, 255, 21);`
const decBackground=css`background-color: red;`

export const ProductContainer = styled.div`

    position: relative;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    background: rgb(70, 163, 110);
    margin-bottom: 10px;
    color: white;
    transition: all 0.3s;

    & > :last-child{
        display: none;
    }

    &:hover {
        transform: scale(1.02);
        background: rgb(61, 129, 207);
        border: 2px solid rgb(62, 105, 184);
        color: rgb(255, 255, 255);
    
        & > :last-child{
            display: block;
        }
    }
`
export const ProductImage = styled.div`
width: 30%;
margin-right: 20px;

& > img {
    height: 100px;
    width: 100px;
}
`

export const ProductDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 5px;`

export const ProductName = styled.div`
    text-transform: capitalize;
    width: 40%;
    font-weight: 400;
    font-size: 20px;`

export const ProductPrice = styled.span`
    width: 20%;
    font-size: 20px;`

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;`

export const ProductRemoveBtn = styled.div`
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
        padding: 2px;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: white;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.25);
            background-color: red;

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

    width: 12px;
    height: 2px;

    background-color: black;
    transform: translate(-50%, -50%) rotateZ(45deg);

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;

        width: 12px;
        height: 2px;

        background-color: black;
        transform: translate(-50%, -50%) rotateZ(90deg);
    }`
export const ProductIncreaseBtn = styled.div`${btn(incBackground)}`
export const ProductDecreaseBtn = styled.div` ${btn(decBackground)}`

const btnIcon=css`
box-sizing: border-box;
position: absolute;
left: 50%;
top: 50%;

width: 10px;
height: 2px;

background-color: black;
transform: translate(-50%, -50%);`

export const IncreaseIcon = styled.div`

    ${btnIcon}

    &::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;

        width: 10px;
        height: 2px;

        background-color: black;
        transform: translate(-50%, -50%) rotateZ(90deg);
`
export const DecreaseIcon = styled.div`${btnIcon}`
