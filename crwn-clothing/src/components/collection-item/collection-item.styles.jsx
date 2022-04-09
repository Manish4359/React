import styled from "styled-components";

export const CollectionItemContainer=styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    transition: all 0.3s;
    position: relative;
    box-shadow: 5px 5px 40px 5px rgb(219, 219, 219);
    border-radius: 10px;
    overflow: hidden;
    background: rgb(255, 255, 255);

    &:hover {
        box-shadow: 5px 5px 30px 5px rgb(199, 199, 199);
        transform: scale(1.05);
        height: 360px;
    
        & >:first-child {
            opacity: 0.7;
            height: 205px;
          }
          & >:last-child{
      
            background: rgb(255, 193, 193);
            border-radius: 10px;
         
          }
    }
    `

export const Image=styled.div`
    width: 100%;
    height: 205px;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: all 0.3s;`

export const CollectionItemFooter=styled.div`
    display: flex;
    width: 80%;
    height: 5%;
    justify-content: space-evenly;
    font-size: 18px;
    margin: 15px auto;
    padding: 10px 10px 20px 10px;
    position: relative;
    transition: all 0.3s;
    font-weight: 500;
`

export const Name=styled.span`
    width: 90%;
    margin-bottom: 15px;`

export const Price=styled.div`
    width: 10%;
`