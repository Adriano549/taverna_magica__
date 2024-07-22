import { createContext } from "react";

const ProdutoContext = createContext({
  produtoSelecionado: null,
  setProdutoSelecionado: (produto) => {},
  filteredProducts: [],
  setFilteredProducts: (filteredProducts) => {},
  carrinho: [],
  adicionarAoCarrinho: (produto) => {},
  removerDoCarrinho: (produtoId, quantidade) => {},
  
});

export default ProdutoContext;
