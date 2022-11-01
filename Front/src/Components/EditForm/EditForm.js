import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/Constants'
import useForm from '../../Hooks/useForm'
import { goToContact, goToHome } from '../../Routes/Coordinator'
import { ButtonOrder, InputStyled, LabelInput, StyledForm } from './Styled'

export default function EditForm(props) {
    const { form, handleChange } = useForm({ nome: "", email: "", telefone: "" })
    const navigate = useNavigate()

    const editContact = (id) => {

        let body = {
            "name": form.nome,
            "email": form.email,
            "phone": form.telefone
        }

        axios
            .put(`${BASE_URL}/contacts/editContact/${id}`, body)
            .then((res) => {
                console.log(res)
                alert(res.data.message)
                goToContact(navigate)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <StyledForm>
            <LabelInput>Nome</LabelInput>
            <InputStyled type='text' name='nome' value={form.nome} onChange={handleChange} required placeholder='Insira um novo nome de contato' />
            <LabelInput>Email</LabelInput>
            <InputStyled type='email' name='email' value={form.email} onChange={handleChange} required placeholder='Insira um novo email de contato' />
            <LabelInput>Telefone</LabelInput>
            <InputStyled type='tel' name='telefone' value={form.telefone} onChange={handleChange} required placeholder='Insira um novo telefone de contato' />
            <ButtonOrder type='button' onClick={()=> editContact(props.id)}>Editar</ButtonOrder>
        </StyledForm>
    )
}
