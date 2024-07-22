import styled from "styled-components"

export const Carrinho = styled.li`
    border: solid 2px rgba(65, 63, 63, 0.518);
    display: flex;
    margin: 10px;
    p {
        font-size: 14px;
    }
    span {
        font-size: 16px;
        color: #65276b;
    }
    img {
        width: 200px;
        height: 100%;
    }
`
export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Preco = styled.p`
    font-size: 18px;
    color: #ff0000;
`