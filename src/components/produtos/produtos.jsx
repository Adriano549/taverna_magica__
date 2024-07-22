import useCheckBoxHook from "../../hooks/useCheckBoxHook";
import { useState } from "react";
import ProductCard from "../reutilizavel/productCard";
import { GridProdutos, Container , ContainerButton , ContainerCheckBox ,Input } from "./styledProdutos";

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

