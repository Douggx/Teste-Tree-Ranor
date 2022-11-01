import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/Constants'
import useForm from '../../Hooks/useForm'
import { goToHome } from '../../Routes/Coordinator'
import { ButtonOrder, InputStyled, LabelInput, StyledForm } from './Styled'

export default function Signup() {
    const { form, handleChange } = useForm({ nome: "", email: "", telefone: "" })
    const navigate = useNavigate()

    const completeSignup = (event) => {
        event.preventDefault(event)

        let body = {
            "name": form.nome,
            "email": form.email,
            "phone": form.telefone
        }

        axios
        .post(`${BASE_URL}/contacts/createContact`, body)
        .then((res) => {
            alert(res.data.message)
            goToHome(navigate)

        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }
    return (
        <StyledForm onSubmit={completeSignup}>
            <LabelInput>Nome</LabelInput>
            <InputStyled type='text' name='nome' value={form.nome} onChange={handleChange} required placeholder='Insira o nome do contato' />
            <LabelInput>Email</LabelInput>
            <InputStyled type='email' name='email' value={form.email} onChange={handleChange} required placeholder='Insira o email do contato' />
            <LabelInput>Telefone</LabelInput>
            <InputStyled type='tel' name='telefone' value={form.telefone} onChange={handleChange} required placeholder='Insira o telefone do contato' />
            <ButtonOrder type='submit'>Enviar</ButtonOrder>
        </StyledForm>
    )
}
