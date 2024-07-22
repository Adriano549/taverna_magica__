import { useState} from "react";
import styled from "styled-components";
import useCep from "../../cepApi/useCep"



const CreateCont = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [cpf, setCpf] = useState("");
    const { cep, handleCepChange, address, error: cepError } = useCep("")
    

    const handleCpfChange = (e) => {
        const cpfValue = e.target.value;
        const cpfLength = cpfValue.length;

        if (cpfLength <= 11) {
            setCpf(cpfValue);
        }
    };
    const handleCreateAccount = (e) => {
        e.preventDefault();
        
        if (!userName || !password || !confirmPassword || !email || !cpf || !cep) {
            setError("Todos os campos são obrigatórios");
            return;
        }

        if (password !== confirmPassword) {
            setError("Senhas não conferem");
            return; 
        }
        
        if (cpf.length !== 11) {
            setError("Por favor, insira o CPF");
            return;
        }
        
        
        setSuccess("Conta criada com sucesso!");
        
        setUserName("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setError("");
    };
    
    
    return (
        <Container>
            <h2>Criar conta</h2>
            <form onSubmit={handleCreateAccount}>
                <div>
                    <label>Nome de Usuário:</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label>Senha:</label>{error && <span style={{ color: "red" }}>{error}</span>}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirmar Senha:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <CepCpf>
                    <label>CEP:</label>{cepError && <span style={{ color: "red" }}>{cepError}</span>}
                    <input type="text" value={cep} onChange={(e) => handleCepChange(e.target.value)} />
                    <label>CPF:</label>
                    <input type="number" value={cpf} onChange={handleCpfChange}  />
                </CepCpf>
                <InputCep>
                    <label>Endereço:</label>
                    <input type="text" value={address.logradouro} disabled />
                    <input type="text" value={address.bairro} disabled />
                    <input type="text" value={address.localidade} disabled />
                    <input type="text" value={address.uf} disabled/>
                </InputCep>
                {success && <p style={{ color: "green" }}>{success}</p>}
                <button type="submit">Criar conta</button>
            </form>
        </Container>
    )
}

export default CreateCont;

const Container = styled.div`
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background-color: #e4e3e3dc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        label{
            display: block;
            margin-bottom: 10px;
        }input{
            width: 100%;
            height: 20px;
        }
        button{
            width: 100px;
            height: 30px;
        }
    }
`
const CepCpf = styled.div`
    display: grid;
    gap: 10px;
`
const InputCep = styled.div`
    display: grid;
    align-items: center;
    gap: 5px;
    input{
        border: 1px solid black;
        margin-right: 10px;
    };
`
