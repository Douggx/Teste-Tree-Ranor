import React from 'react'
import { ContactH3, Icons, MainContainer, SectionEditRemove } from './Styled'
import Trash from '../../Assets/remove-svgrepo-com.svg'
import Edit from '../../Assets/edit-svgrepo-com.svg'
import { BASE_URL } from '../../Constants/Constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToEdit } from '../../Routes/Coordinator'

export default function CardContacts(props) {
    const navigate = useNavigate()

    const deleteContact = (id) => {
        axios.delete(`${BASE_URL}/contacts/deleteContact/${id}`)
            .then((res) => {
                alert(res.data.message)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    
  return (
    <MainContainer>
        <ContactH3>{props.name}</ContactH3>
        <ContactH3>{props.email}</ContactH3>
        <ContactH3>{props.phone}</ContactH3>
        <SectionEditRemove>
            <Icons src={Edit} onClick={()=> goToEdit(navigate, props.id)}/>
            <Icons src={Trash} onClick={()=> deleteContact(props.id)}/>
        </SectionEditRemove>
    </MainContainer>
  )
}
