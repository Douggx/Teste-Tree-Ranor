import React from 'react'
import Header from '../../Components/Header/Header'
import { ButtonContacts, ButtonNew, Main, PeopleImg } from './Styled'
import People from '../../Assets/people-main.svg'
import { goToContact, goToRegister } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <Main>
                <PeopleImg src={People} />
                <ButtonContacts onClick={()=> goToContact(navigate)}>Contatos</ButtonContacts>
                <ButtonNew onClick={()=> goToRegister(navigate)}>Novo Contato</ButtonNew>
            </Main>
        </>
    )
}
