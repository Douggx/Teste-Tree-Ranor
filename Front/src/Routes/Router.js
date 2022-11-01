import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactPage from '../Pages/ContactPage/ContactPage'
import EditPage from '../Pages/EditPage/EditPage'
import Home from '../Pages/Home/Home'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='cadastro' element={<RegisterPage />} />
                <Route path='contatos' element={<ContactPage />} />
                <Route path='editarContato/:id' element={<EditPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}