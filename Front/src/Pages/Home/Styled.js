import styled from "styled-components";
import Agenda from '../../Assets/agenda-button.svg'
import Plus from '../../Assets/plus-button.svg'

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

export const PeopleImg = styled.img`
width: 189px;
height: 187px;
margin-top: 54px;
margin-bottom: 69px;
`

export const ButtonContacts = styled.button`
width: 350px;
height: 115px;
border-radius: 10px;
border: none;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 60px;
padding-left: 30px;

color: #FFFFFF;

background: url(${Agenda});
background-position: 1.25rem;
background-repeat: no-repeat;
background-size: 65.63px 76px;

background-color: #FF7856;

margin-bottom: 60px;
cursor: pointer;
`

export const ButtonNew = styled.button`
width: 350px;
height: 115px;
border-radius: 10px;
border: none;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 60px;
padding-left: 48px;

color: #FFFFFF;

background: url(${Plus});
background-position: 1.25rem;
background-repeat: no-repeat;
background-size: 45px 45px;

background-color: #FF7856;

cursor: pointer;
`