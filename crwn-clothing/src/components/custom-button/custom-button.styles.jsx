import styled, { css } from "styled-components";

const addtoCartButtonStyles = css`

  padding: 0 25px;
  margin: 0;
  height: 40px;
  position: absolute;
    opacity: 1;
    top: 300px;
    font-weight: lighter;
    transition: all 0.3s;
  `


const signInWithGoogleStyles = css`background: rgb(210, 54, 54);
  `

const getButtonStyles=props=>{
    

    if(props.googleSignIn){
        return signInWithGoogleStyles;
    }
    if(props.addtocartbutton){
        return addtoCartButtonStyles;
    }
}

export const CustomButtonContainer = styled.button`

    min-width: 145px;
    width: auto;
    height: 50px;
    padding: 0 25px;
    margin: 0 5px;
    font-size: 15px;
    background: #a985e6;
    background-size: 100%;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    //border-radius:25px;
    cursor: pointer;
    transition: all 0.5s;
    border:none;

    &:hover {
    background: #000;
    transform: translateY(-5px);
    box-shadow: 2px 2px 5px #ccc;
    }

    ${getButtonStyles}
`
