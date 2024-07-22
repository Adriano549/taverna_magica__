import styled from "styled-components";
import useCheckBoxHook from "../../../hooks/useCheckBoxHook";
import ProductCard from "../../reutilizavel/productCard";


const Linha1Home = () => {
    const { produtos } = useCheckBoxHook();
    const shuffle = (array) => {
        let currentIndex = array.length;
        while (0 !== currentIndex) {
            const randomIndex = Math.floor(Math.random() * currentIndex--);
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    };
    const produtosAleatorios = shuffle(produtos.slice(0, produtos.length)).slice(0, 4);
    

    return (
        <GridProdutos>
            {produtosAleatorios.map((produto) => (
                <ProductCard key={produto.id} product={produto}></ProductCard>
            ))}
        </GridProdutos>
    );
};

export default Linha1Home;

const GridProdutos = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns:  repeat(auto-fill, minmax(200px, 300px));
    gap: 20px;
    justify-content: center;
    div{
        padding: 10px;
        text-align: center;
        background-color: #ac64b6b9;
        border-radius: 10px;
        max-height:400px;
        
    }
    img{
        border-radius: 10px;
        height: auto;
    }
    p{
        font-size: 16px;
        text-align: start;
        padding:5px;
        border-top: white solid 1px;
    }
    span{
        font-weight: 700;
        font-size: 16px;
        color: #302347;
    }
`