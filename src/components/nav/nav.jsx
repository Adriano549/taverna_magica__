import styled from "styled-components";
import Logo from "../../img/Logo.png"
import { FlaskRound, Wand ,  ShoppingCart } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

     const linkStyle = {
    display: location.pathname === "/criar-conta" ? "none" : "block",
    };
    const pagamentoStyle = {
        display:location.pathname === "/pagamento" ? "none" : "block", 
    };
    return (
        <Container>
            <DivLogo>
                <img src={Logo}  alt="Logo do site" onClick={() => navigate("/")}/>
            </DivLogo>
            <div>
                <nav style={pagamentoStyle}>
                    <ListNav>  
                        <li>
                            <h2 onClick={() => navigate("/")}>Home</h2>
                        </li>
                        <li style={linkStyle}>
                            <h2 onClick={() => navigate("/produtos")}>
                                <FlaskRound color="#f820ff" size={25}/>Produtos
                                <Wand color="#f820ff" size={25}/>
                            </h2> 
                        </li>
                        <li style={linkStyle}>
                            <h2 onClick={() => navigate("/sobre")}>Sobre</h2>
                        </li>
                        <li style={linkStyle}>
                            <h2 onClick={() => navigate("/login")}>Conta</h2>
                        </li>
                        <li style={linkStyle}>
                            <h2 onClick={() => navigate("/carrinho")}>Carrinho<ShoppingCart  color="#d10c26" size={25}/></h2>
                        </li>
                    </ListNav>
                </nav>
            </div>
        </Container>
    )
}

export default Header;

const Container = styled.header`
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    border-bottom: solid 2px white;
    @media (max-width: 768px) {
        gap: 0;
        grid-template-columns: 1fr;
    }
`
const ListNav = styled.ul`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        align-items: center;
        justify-items: center;
        @media(max-width: 768px) {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
            li{
                padding: 15px;
            }svg{
                display: none;
            }h2 {
            font-size: 1rem;
            color: #250025;
            &:hover {
            color: #f820ff;
            cursor: pointer;
            }   }               }
    li{
        padding: 10px;
    }
    
    h2{
        font-size: 1.4rem;
        color: #250025;;
    &:hover{
        color: #f820ff;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        transform: scale(1.2);
        }
    }
`
const DivLogo = styled.div`
    display: flex;
    align-items:center;
    @media (max-width: 768px) {
            display: none;
        }
    img {
        margin-left: 15px;
        border-radius: 50%;
        border: outset #000000  2px;
        width: 130px;
        cursor: pointer;
    }
`

