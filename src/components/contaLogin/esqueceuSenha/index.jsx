import { useState } from "react"
import styled from "styled-components"

const ForgetPassword = () => {
    const [userName, setUserName] = useState('')
    const [error, setError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName === '') {
            setError(true)
            return  
        }
        alert('Email enviado com link para redefinir senha!')
        setError(false) 
        
    }
    

    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <h1>Esqueceu a senha?</h1>
            <p>Entre no seu email para redefinir sua senha.</p>
            <input 
                    type="text" 
                    placeholder="E-mail"  
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                    
                    {error && <span style={{ color: "red" }}>Por favor, preencha o campo de email.</span>}
            <button type="submit">Redefinir Senha</button>
            </form>
        </Container>
    )
}

export default ForgetPassword

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    justify-content: center;
    gap: 20px;
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }input{
        width: 200px;
        padding: 5px;
    }

`
