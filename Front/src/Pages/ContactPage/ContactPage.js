import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardContacts from '../../Components/CardContacts/CardContacts'
import Header from '../../Components/Header/Header'
import { BASE_URL } from '../../Constants/Constants'
import { goToHome } from '../../Routes/Coordinator'
import { DivGoBack, GoBackImg, H1Contact, LabelH3, Main, StyledText, TableLabel } from './Styled'
import GoBack from '../../Assets/go-back.svg'

export default function ContactPage() {
    const navigate = useNavigate()
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/contacts/getContacts`)
            .then((res) => {
                setContacts(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    return (
        <>
            <Header />
            <Main>
                <H1Contact>Lista de Contatos</H1Contact>
                <TableLabel>
                    <LabelH3>Nome</LabelH3>
                    <LabelH3>Email</LabelH3>
                    <LabelH3>Telefone</LabelH3>
                    <div></div>
                </TableLabel>

                {contacts.map((contact) => {
                    return <CardContacts
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone} />
                })}

                <DivGoBack>
                    <GoBackImg src={GoBack} onClick={() => goToHome(navigate)} />
                    <StyledText onClick={() => goToHome(navigate)}>Voltar</StyledText>
                </DivGoBack>
            </Main>
        </>
    )
}
