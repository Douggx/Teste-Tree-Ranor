import React from 'react'
import Header from '../../Components/Header/Header'
import Signup from '../../Components/Signup/Signup'
import GoBack from '../../Assets/go-back.svg'
import { DivGoBack, GoBackImg, H2, Main, StyledText } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/Coordinator'

export default function RegisterPage() {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <Main>
                <H2>
                    Cadastre um novo contato
                </H2>

                <Signup />

                <DivGoBack>
                    <GoBackImg src={GoBack} onClick={()=> goToHome(navigate)}/>
                    <StyledText onClick={()=> goToHome(navigate)}>Voltar</StyledText>
                </DivGoBack>
            </Main>

        </>
    )
}
