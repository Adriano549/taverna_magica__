import styled from "styled-components"


export const Container = styled.div`
    text-align: center;
    h2{
        margin:5px;
        font-size: 22px;
    }
`

export const SelectOption = styled.select`
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #b964b5;
    cursor: pointer;
    color: #592c5e;
    font-size: 14px;
    :hover{
        border: 1px solid #65276b;
    }

`
export const Options = styled.option`
    color: #592c5e;
    background-color: #ffffff;
    border: none;
    text-align: center;
    
`
export const AvisoJuros = styled.p`
    color: red;
    font-weight: bold;
    margin-top: 10px;
`;