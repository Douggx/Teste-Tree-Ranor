import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

export const H1Contact = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 60px;
color: #ff7856;

margin-top: 15px;
margin-bottom: 15px;
`

export const TableLabel = styled.div`
display: flex;
flex-direction: row;
min-width: 60vw;
min-height: 45px;
background-color: #F47C0C;
justify-content: space-around;
align-items: center;
border-radius: 5px;
@media (max-width: 952px) {
    min-width: 90vw;
  }

`

export const LabelH3 = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;

color: #FFFFFF;
`

export const DivGoBack = styled.div`
display: flex;
flex-direction: row;
margin-top: 100px;
align-items: center;
`

export const GoBackImg = styled.img`
width: 50px;
height: 50px;
cursor: pointer;
`

export const StyledText = styled.h4`
margin-top: 10px;
margin-left: 14px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;

color: #FF7856;
cursor: pointer;
`