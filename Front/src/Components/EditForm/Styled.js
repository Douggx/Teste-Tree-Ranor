import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 360px;
`

export const LabelInput = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 22px;
color: #C9481F;
`

export const InputStyled = styled.input`
width: 300px;
height: 30px;
padding: 1.6px 11.2px;
border: 1.6992px solid #d5d8de;
border-radius: 5.008px;
margin-top: 10px;
margin-bottom: 10px;
`

export const ButtonOrder = styled.button`
margin-top: 1.25rem;
width: 20.875rem;
height: 2.3125rem;
border: none;
background: #FF7856;
border-radius: 1.25rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.125rem;
line-height: 1.375rem;
align-items: center;
text-align: center;
color: #FFFFFF;
:hover:not(.active) {
    background-color: #F25831;
}
`