import styled from "styled-components";

export const MainContainer = styled.header`
height: 18vh;
background-color: #FFF5E0;
display: flex;
flex-direction: row;
align-items: center;
box-shadow: 0px 2px 2px rgba(167, 151, 151, 0.39);
@media (max-width: 644px) {
    justify-content: center;
  }
`

export const AgendaImg = styled.img`
margin-left: 62px;
margin-right: 32px;
`

export const Name = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 60px;
color: #FF7856;
`