// CarrinhoItem.jsx
import React from 'react';

import { Carrinho, DivButton, Preco } from './styledcarrinho.jsx'
import formatPriceBR from '../../reutilizavel/formatiPrice.jsx';

const CarrinhoItem = ({ item, handleAddMore, handleRemove }) => (
    <Carrinho>
        <DivButton>
            <div>
                <p>{item.nome}</p>
                <Preco>{formatPriceBR(item.preco * item.quantidade)} <span>- x{item.quantidade}</span></Preco>
            </div>
            <div>
                <button onClick={() => handleAddMore(item)}>Adicionar mais</button>
                <button onClick={() => handleRemove(item.id)}>Remover 1</button>
            </div>
        </DivButton>
        <div>
            <img src={item.imagem} alt={item.nome} />
        </div>
    </Carrinho>
);

export default CarrinhoItem;

