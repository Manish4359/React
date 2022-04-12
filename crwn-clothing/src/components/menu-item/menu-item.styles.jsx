import styled,{css} from "styled-components";

export const MenuItemContainer=styled.div`
    min-width: 32%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    position: relative;
    overflow: hidden;
    border-radius:10px;

    &:hover {
        cursor: pointer;

        & > div {
        transform: scale(1.2);
        opacity: 1;
        }
    }

    @media only screen and (max-width: 570px) {
        & {
         padding:50px;
        }
`
export const BackgroundImage=styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    transition: all 1s;
`
export const Content=styled.div`
    height: 100px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: cornsilk;
    opacity: 0.7;
    transition: all 0.7s;
`

export const ContentTitle=styled.h1`

    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    /*background: linear-gradient(
        to right bottom,
        rgb(47, 82, 235) 10%,
        rgb(27, 197, 27)
    );

    background-clip: text;
    */
    background-size: 100%;
    text-transform: uppercase;
    transition: all 0.5s;
    position: relative;
    ${css``}

    &:before {
        position: absolute;
        content: "";
        background: rgb(241, 207, 207);
        width: 100%;
        height: 2px;
        top: 100%;
        left: 0;
        bottom: 0;
        transition: all 0.5s;
    }
`

export const ContentSubtitle=styled.div`
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
`

