import styled from "styled-components";
import Footer from "../footer/footer";


const Sobre = () => {
    return (
        <>
        <Main>
            <h1>Seja Bem-vindo(a) à Lucy Taverna!</h1> 
            <div>
            <h3>Um Empório de Aventuras Mágicas Aguarda por Você!</h3>
            <p>A Lucy Taverna é mais do que apenas um lugar para comprar poções e pergaminhos. É um portal para um mundo de fantasia e aventura, onde você pode encontrar tudo o que precisa para explorar o mundo magico.</p>
            </div>
            <div>
            <h3>O que Oferecemos</h3>
            <p>Na Taverna Mágica, você encontrará uma grande variedade de itens mágicos, incluindo:
                Armas e armaduras encantadas: Com propriedades especiais para ajudá-lo a derrotar seus inimigos.
                Poções e elixires: Para curar feridas, restaurar mana e conceder outros efeitos poderosos.
                Pergaminhos e livros de feitiços: Com magias para todos os níveis de experiência.
                Artefatos e relíquias: Com poderes misteriosos e histórias fascinantes.
                Ingredientes raros: Para criar seus próprios feitiços e poções.</p>
            </div>
        </Main>
        <Footer/>
        </>
    )
}

export default Sobre;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    div{
        text-align: center;
        width: 80%;
        margin: 20px 0;
    }

`