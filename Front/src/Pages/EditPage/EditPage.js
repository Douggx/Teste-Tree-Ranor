import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Signup from '../../Components/Signup/Signup';
import { goToContact, goToHome } from '../../Routes/Coordinator';
import GoBack from '../../Assets/go-back.svg'
import { DivGoBack, GoBackImg, H2, Main, StyledText } from './Styled';
import EditForm from '../../Components/EditForm/EditForm';

export default function EditPage() {
    const params = useParams();
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <Main>
                <H2>
                    Editar Contato
                </H2>

                <EditForm id={params.id}/>

                <DivGoBack>
                    <GoBackImg src={GoBack} onClick={() => goToContact(navigate)} />
                    <StyledText onClick={() => goToContact(navigate)}>Voltar</StyledText>
                </DivGoBack>
            </Main>
        </>
    )
}
