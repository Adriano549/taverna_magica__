import styled from "styled-components";
import Logo from "../../img/Logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff, Eye } from 'lucide-react';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        if (userName === 'admin' && password === 'admin') {
            navigate('/')
        } else {
            setError(true);
        }
    }
    return(
        <Container>
            <LogoDiv>
                <img src={Logo} alt="" />
            </LogoDiv>
            <div>
                <Form onSubmit={handleSubmit}>
                    <h2>Fazer Login</h2>
                    <p>E-mail</p> 
                    <span style={{ display: error ? 'block' : 'none' }}>Usuário ou senha inválidos!</span>
                    <input 
                    type="text" 
                    placeholder="E-mail"  
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                    <div>
                        <p>Senha</p> 
                        <p onClick={() => setShowPassword(!showPassword)}> 
                        {showPassword ? <EyeOff /> : <Eye />}
                        </p>
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                    <a onClick={() => navigate("/loginSenha")}>Esqueceu a senha?</a>
                    <a onClick={() => navigate("/criar-conta")}>Criar uma conta</a>
                </Form>
            </div>
        </Container>
    )
}
export default Login;

const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 100px;
    padding: 50px;
    align-items:center;
    @media (max-width: 768px) {
        display: flex;
        gap:50px;
        justify-content:center;
    }@media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        gap: 0px;
        padding: 10px;
        input, button{
            width: 100%;
        }p{
            font-size: 14px;
        }
    }
`
const LogoDiv = styled.div`
    img{
        border-radius: 50%;
        border: solid 3px black;
    }
    @media (max-width: 768px) {
        width:45%;
        img{
            width: 100%;
        }
    }@media (max-width: 425px) {
        text-align: center;
        img {
            width: 50%;
        }
    }

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    input, button{
        height: 30px;
        margin-bottom: 20px;
        padding: 0 10px;
    }button{
        width: 100px;
        background-color: #956c9b;
        color: #fff;
        border: none;
        cursor: pointer;
    }h2{
        margin-bottom: 5px;
    }
    p{
        margin-bottom: 5px;
        font-size: 18px;
    }span{
        color: red;
        font-size: 14px;
        display: none;
    }div{
        display: flex;
        gap: 5px;
    }a{
        cursor: pointer;
        font-size: 18px;
    }a:hover{
            color: #ecc5ec;
        }
`