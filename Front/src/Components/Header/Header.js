import React from 'react'
import { AgendaImg, MainContainer, Name } from './Styled'
import AgendaHeader from '../../Assets/agenda-header.svg'

export default function Header() {
  return (
    <MainContainer>
        <AgendaImg src={AgendaHeader}/>
        <Name>Agenda de Contatos</Name>
    </MainContainer>
  )
}
