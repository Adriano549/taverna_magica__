import { createGlobalStyle } from 'styled-components'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/nav/nav.jsx'
import { useState } from'react'
import ProdutoContext from './components/context/produtocontext.jsx'

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]); 
  };
  const removerDoCarrinho = (produto) => {
    const itemIndex = carrinho.findIndex((item) => item.id === produto);
    if (itemIndex !== -1) {
      const updatedCarrinho = [...carrinho];
      const item = updatedCarrinho[itemIndex];
      if (item.quantidade > 1) {
        item.quantidade--;
      } else {
        updatedCarrinho.splice(itemIndex, 1);
      }
      setCarrinho(updatedCarrinho);
    }
  };
  
  const contextValue = {
    produtoSelecionado,
    setProdutoSelecionado,
    filteredProducts,
    setFilteredProducts,
    carrinho,
    adicionarAoCarrinho,
    removerDoCarrinho
  };
  return (
    <><ProdutoContext.Provider value={contextValue}>
    <GlobalStyle/>
    <Header/>
    <Outlet/>
    </ProdutoContext.Provider>
    </>
  )
}

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: inherit;
}

body{
  font-family: "Roboto" , sans-serif;
  background: linear-gradient(90deg, #8c52ff, #4c3163 ) no-repeat ;
  max-width: 1440px;
  min-height: 100vh;
}


ul, ol {
  list-style: none;
  padding: 0;
}
img {
  max-width: 100%;
  height: auto;
}
`

export default App
