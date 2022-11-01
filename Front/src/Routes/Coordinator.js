export const goToHome = (navigate) => {
    navigate('/')
}

export const goToRegister = (navigate) => {
    navigate('/cadastro')
}

export const goToContact = (navigate) => {
    navigate('/contatos')
}

export const goToEdit = (navigate, id) => {
    navigate(`/editarContato/${id}`)
}