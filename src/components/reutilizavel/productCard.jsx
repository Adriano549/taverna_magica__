import React from 'react';
import { useNavigate } from 'react-router-dom';
import formatPriceBR  from './formatiPrice';
import { useContext } from 'react'; 
import ProdutoContext from '../context/produtocontext';
import useCheckBoxHook from '../../hooks/useCheckBoxHook';

const ProductCard = ({ product}) => {
    const {produtos} = useCheckBoxHook()
    const navigate = useNavigate();
    const { setProdutoSelecionado, setFilteredProducts } = useContext(ProdutoContext) 
    const handleProdutoClick = () => {
        
        const selectedCategory = product.categoria; 
        const filteredProducts = produtos.filter(item => item.categoria === selectedCategory);

        setProdutoSelecionado(product);
        setFilteredProducts(filteredProducts);
        navigate(`/produtos/${product.id}`);
      };

    return (
        <div style={{ cursor: "pointer" }} key={product.id} onClick={handleProdutoClick}>
            <img src={product.imagem} alt={product.nome} />
            <p>{product.nome}</p>
            <p>{product.descricao}</p>
            <p><span>{formatPriceBR(product.preco)}</span></p>
        </div>
    );
};

export default ProductCard;


