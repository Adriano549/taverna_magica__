import styled from "styled-components";
import { WandSparkles, Coins, Archive, Receipt } from 'lucide-react';
import ProdutosHome from "./sectionMarketing";

const Produtos = () => {
    return (
        <>
        <Beneficios>
            <div>
                <h2><Coins />Frete Gratis</h2>
                <p>Acima de R$299</p>
            </div>
            <div>
                <h2><WandSparkles />Entrega Portal</h2>
                <p>Entrega imediata com taxa de R$100</p>
            </div>
            <div>
                <h2><Archive />Retire</h2>
                <p>Retirar na taverna</p>
            </div>
            <div>
                <h2><Receipt />Parcele</h2>
                <p>Ate 8x Sem Juros</p>
            </div>
        </Beneficios>
        <ProdutosHome/>
        </>
    )
}

export default Produtos;

const Beneficios = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    div:hover{
        transform: scale(1.3);
        transition: transform 0.3s;
        color: white;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        
        p{
            font-size: 10px;
        }
        h2 {
            font-size: 14px;
        }
    }
`