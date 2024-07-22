import styled from "styled-components";


export const FormaPagamentoCartao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    
    h3 {
        margin-bottom: 10px;
    }
`
export const CreditCardInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    div{
        display: flex;
        position: relative;
        justify-content: center;
    }
    label {
    position: absolute;
    pointer-events: none;
    left: 1px;
    top: 0;
    font-size: 12px;
    color: #7a3232c5;
    }
    input {
        margin: 5px;
        padding: 5px;
        width: 300px;
        border: 1px solid #cccccc;
        border-radius: 5px;
    }
`
export const Valores = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));;
    text-align: start;
    gap: 5px;
    width: 100%;
    div{
        border: 1px solid #cccccc;
        background-color: aliceblue;
    }
    p{
        font-weight: 18px;
        margin: 5px;
        border-bottom: 1px solid black;
    }span{
        color: #ff5e5e;
    }
`