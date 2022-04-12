import styled,{css} from "styled-components";
import StripePayment from "../../components/stripe/stripe";

export const CheckoutContainer=styled.div`
    //width:100%;
    height:fit-content;
    display: flex;
    //justify-content: space-between;
    transition: all 0.5s;
    margin:60px;

    box-shadow: ${props=>(props.cartLength===0)?'':'3px 3px 90px #ccc'};
`

export const CartContainer=styled.div`
    width: ${props=>(props.cartLength===0)?'100%':'70%'};
    overflow:auto;
    overflow-x: hidden;
    padding: 40px;
    //border-radius: 10px;
    //box-shadow: 3px 3px 20px rgb(231, 231, 231), -3px -3px 20px rgb(230, 230, 230);
    
    //border:2px solid black;
    
    `


    
const headingText=css`
        text-transform: capitalize;
        text-align: center;
       font-weight:700;
        padding: 10px 0;`

export const CartContainerHeading=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:baseline;
    border-bottom: 2px solid #ccc;


    & > span{
        font-size:20px;
        ${headingText}
    }
`

export const ProductHeading=styled.div`

    display:flex;
    flex-diection:row;
    justify-content:flex-start;
    padding:10px 0;
    margin:10px 0;

    background:#ffc1c1;


    & span{
        font-weight:500;
        text-transform:uppercase;
        font-size:13px;
    }
    
    & > div:first-child{

        width:40%;
        text-align:center;

    }
    
    & > div:last-child{
        display:flex;
        justify-content:space-evenly;
        width:60%;

       
    }
    
    
    
`

export const Summary=styled.div`
    width: 30%;
    padding: 40px;
    //border:1px solid #eee;
    background:#fcf2ff;    
`
export const PriceContainer=styled.div`
   margin-bottom:50px;
`
export const PriceContainerHeading=styled.p`
    margin:0;
    ${headingText}
    font-size:20px;
    border-bottom: 2px solid #ccc;
`


export const Price=styled.div`
    padding: 10px 0;
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
export const CartEmptyContainer=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding:10px;



    &>span{
        margin-bottom:10px;
        font-size:18px;

        @media  only screen and (max-width:462px){

            &{
                font-size:16px;
            }
        }
    }

    &>img{
        @media  only screen and (max-width:462px){

            &{
                width:70%;
            }
        }
    }
`
export const TestData=styled.div`

    display:flex;
    flex-flow:column;
    align-items:center;

    border:2px solid black;
    & >span{
        padding5px;
        font-size:12px;
    }
`