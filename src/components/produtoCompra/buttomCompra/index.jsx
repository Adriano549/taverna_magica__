import { useContext, useState } from "react";
import ProdutoContext from "../../context/produtocontext";
import styled from "styled-components";

const AddToCartButton = () => {
    const { adicionarAoCarrinho, produtoSelecionado } = useContext(ProdutoContext);
    const [message, setMessage] = useState("");
    const handleAddToCart = () => {
        adicionarAoCarrinho(produtoSelecionado);
        setMessage("Produto adicionado ao carrinho!");
        setTimeout(() => {
            setMessage("");
        }, 1000);
    }
    
    return (
        <>
        <Button onClick={handleAddToCart}>
            Adicionar ao carrinho
        </Button>
        {message && <Message>{message}</Message>}
        </>
    );
}

export default AddToCartButton;


const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    background-color: #65276b;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
`;

const Message = styled.p`
    color: green;
    margin-top: 10px;
`;

