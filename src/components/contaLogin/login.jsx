import Logo from "../../img/Logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff, Eye } from 'lucide-react';
import { Container, Form ,LogoDiv } from "./styledlogin";

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

