import styled from "styled-components";

export const Container = styled.main`
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
export const LogoDiv = styled.div`
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
export const Form = styled.form`
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