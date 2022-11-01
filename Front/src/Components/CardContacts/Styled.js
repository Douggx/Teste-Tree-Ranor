import styled from "styled-components";

export const MainContainer = styled.article`
display: flex;
flex-direction: row;
min-width: 60vw;
min-height: 45px;
background-color: #F08435;
justify-content: space-around;
align-items: center;
margin: auto;

@media (max-width: 952px) {
    min-width: 90vw;
  }
`

export const ContactH3 = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 22px;
color: #FFFFFF;
max-width: 14vw;
white-space: nowrap;

@media (max-width: 714px) {
    font-size: 12px;
  }

  @media (max-width: 564px) {
    font-size: 10px;
  }
`

export const SectionEditRemove = styled.div`
display: flex;
flex-direction: row;
gap: 25px;
align-items: center;
`

export const Icons = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
`