import styled from "styled-components";
import { Slides } from "../slide/index.jsx";


const Marketing = () => {

    return(
        <Container>
            <Slides></Slides>
            <Iniciantes>
                <h2>Iniciantes</h2>
                <Info>
                <div><h4>Armas</h4>
                    <p>Se você prefere combate corpo a corpo, escolha uma espada ou machado mágico. <br/>Se você prefere atacar à distância, escolha um arco ou besta mágica.</p>
                    <p> As armas mágicas precisam ser reparadas e afiadas regularmente para funcionar da melhor maneira.</p></div>
                <div><h4>Habilidades</h4>
                    <p>Algumas habilidades são mais úteis para combate corpo a corpo, enquanto outras são mais úteis para magia à distância ou cura.</p>
                    <p>Quanto mais você usar suas habilidades, melhor você se tornará em usá-las.</p></div>
                <div><h4>Poçoes</h4>
                    <p>As poções podem estragar se não forem armazenadas corretamente.<br/> Mantenha-as em um local fresco e escuro.</p>
                    <p>Existem muitos tipos diferentes de poções éimportante saber quais poções são seguras para beber e quais podem ser prejudiciais</p></div>
                </Info>
            </Iniciantes>
        </Container>
    )
}

export default Marketing;

const Container = styled.section`
    display: grid;
    grid-template-columns:  repeat(auto-fill, minmax(200px , 48%));
    margin: 40px;
    gap: 35px;
    text-align:center;
    @media (max-width: 768px){
        margin: 20px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        
    }
`
const Iniciantes = styled.div`
    
    h2 {
        font-size: 30px;
        font-weight: 600;
        color: white;
    }
    @media(max-width: 450px){
        width: 80%;
    }
`
const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:20px;
    div {
        background-color: #bc95ff97;
        box-shadow: 10px 5px 20px #302347;
        border: solid 1px black;
    }
    h4{
        border-bottom: solid 1px white;
    }
    p{  
        text-align: center;
        line-height: 28px;
        font-weight: 500;
        text-align: start;
    }
    @media (max-width: 768px) { 
        grid-template-columns: repeat(2, 1fr);
        h2{
            font-size: 14px;
        }
        h4{
            font-size: 14px;
        }
    }
`