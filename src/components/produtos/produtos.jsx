import styled from "styled-components";
//import SearchProducts from "../hooks/buttonSerchProducts";
import useCheckBoxHook from "../../hooks/useCheckBoxHook";
import { useState } from "react";
import ProductCard from "../reutilizavel/productCard";

const AbaProdutos = () => {
    const { produtos, handleCheckboxChange, selectedCategories, handleSearchChange } = useCheckBoxHook();
    const categories = ['pocoes', 'feiticos', 'armas', 'acessorios', 'armaduras'];
    const MaxProdutosPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const handleShowMore = () => {
        setCurrentPage(currentPage + 1);
    };
    const handleShowLess = () => {
        setCurrentPage(currentPage - 1);
    };
    const startIndex = (currentPage - 1) * MaxProdutosPage;
    const endIndex = startIndex + MaxProdutosPage;
    return (
        <Container>
            <ContainerCheckBox>
                <div>
                <input type="text" 
                placeholder="Buscar produto" 
                onChange={handleSearchChange}/>
                </div>
                {categories.map((categoria, index) =>
                    <div key={index}>
                        <label htmlFor={categoria}>{categoria}</label>
                        <Input
                            type="checkbox"
                            name={categoria}
                            id={categoria}
                            checked={selectedCategories.includes(categoria)}
                            onChange={() => handleCheckboxChange(categoria, !selectedCategories.includes(categoria))} />
                    </div>
                )}
            </ContainerCheckBox>
            <GridProdutos>
                {produtos.slice(startIndex, endIndex).map((produto) => (
                    <ProductCard key={produto.id} product={produto}></ProductCard>
                ))}
                
            </GridProdutos>
            <div>
            </div>
            <ContainerButton>
            <button onClick={handleShowLess} disabled={currentPage === 1}>
                Pagina anterior
                </button>
                <button onClick={handleShowMore} disabled={endIndex >= produtos.length}>
                    Proxima pagina
                </button>
            </ContainerButton>
        </Container>
    )
}

export default AbaProdutos;

const GridProdutos = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-content: center;
    div{
        padding: 10px;
        text-align: center;
        background-color: #ac64b6b9;
        border-radius: 10px;
        
    }
    img{
        border-radius: 10px;
        width: 100%;
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
    @media(max-width:425px){
        img{
            width: 90%;
            
        }
    }

`
const ContainerCheckBox = styled.div`
    background-color: aliceblue;
    border-radius: 10px;
    border: solid 4px #65276b;
    padding: 10px;
    height: 280px;
    div{
        border-bottom: solid 2px #65276b;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        justify-content: space-between;
        label{
            font-size: 20px;
            cursor: pointer;
        }
    }
    @media (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: auto;
        div{
            
            justify-content: space-evenly;
        }
    }
`
const Input = styled.input.attrs({ type: "checkbox" })`
            appearance: none;
            position: relative;
            background-color:#956c9b;
            width: 30px;
            height: 16px;
            border-radius: 10px;
            transition: ease 0s,left 0s;
            will-change: left;
            cursor: pointer;
            &:checked{
                background-color:#499e49;
                &:checked::after {
                    left: 15px;
                }
            }
        &:after{
            position: absolute;
            content: "";
            width: 18px;
            height: 18px;
            background-color: #aaa5a5;
            top: -1px;
            left: -2px;
            border-radius: 50%;
            transition: ease 0s,left 0.2s;
            will-change: left;
        }
    

`
const Container = styled.div`
    display: grid ;
    grid-template-columns: repeat(2, auto);
    margin: 30px;
    gap: 40px;
    @media (max-width: 768px){
        margin: 10px;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    }
    @media (max-width: 480px){
        margin: 5px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    button{
        padding: 10px;
        border-radius: 10px;
        background-color: #65276b;
        color: white;
        cursor: pointer;
        font-size: 16px;
        width: 150px;
        
        &:disabled{
            background-color: #956c9b;
            cursor: not-allowed;
        }
    }
`
