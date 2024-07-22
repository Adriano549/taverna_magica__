import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    margin: 40px;
    gap: 20px;
    section {
        width: 100%;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        text-align: center;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    button {
        margin-top: 5px;
        width: 120px;
        border-radius: 5px;
        background-color: #65276b;
        color: white;
        cursor: pointer;
        font-size: 16px;
        &:hover {
            background-color: #b336a0;
            border-color: #000000;
        }
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const InputCep = styled.div`
    display: grid;
    align-items: center;
    gap: 5px;
    input {
        border: 1px solid black;
        margin-right: 10px;
        width: 200px;
        height: 24px;
    }
`
export const ResumoPedido = styled.div`
    background-color: hsl(0, 0%, 100%);
    border: solid 2px rgba(173, 52, 157, 0.6);
    padding: 10px;
    p {
        margin-top: 5px;
    }
`
