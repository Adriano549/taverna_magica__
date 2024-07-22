import { useContext} from "react";
import ProdutoContext from "../context/produtocontext";
import styled from "styled-components";
import {  useParams } from "react-router-dom";
import useCheckBoxHook from "../../hooks/useCheckBoxHook";
import Markdown from "marked-react";
import ProductCard from "../reutilizavel/productCard";
import formatPriceBR from "../reutilizavel/formatiPrice";
import AddToCartButton from "./buttomCompra";

const ProductDetails = () => {
  const { produtoSelecionado, filteredProducts, } = useContext(ProdutoContext);
  const { produtos } = useCheckBoxHook()
  const {id} = useParams()
  
  const productById = produtos.find((produto) => produto.id === id);
  let productToDisplay = productById || produtoSelecionado;
  const productByCards = produtos.filter((item) => item.categoria === productById.categoria);
  let productToDisplayCard = productByCards || filteredProducts

  const precoProduto =  productToDisplay?.preco;
  const precoComDesconto = calcularDesconto(precoProduto);
  const parcelaSemJuros = precoProduto / 8;

  function calcularDesconto(preco) {
    const valorDesconto = preco * 0.1;
    return preco - valorDesconto;
  }

  return (
    <Main>
      <article>
        <section>
          <h1>{productToDisplay?.nome}</h1>
          <ContainerProduto>
            <ProdutoImg>
              <img src={productToDisplay?.imagem} alt="" />
            </ProdutoImg>
            <ProdutoPrice>
              <p>Vendido e entregue por:<Span>Lucy Taverna</Span></p>
              <p>Em estoque:<Estoque> Disponivel</Estoque></p>
              {productToDisplay?.preco && ( // Check if price exists before rendering
                <>
                  <p><Preco>R$ {formatPriceBR(productToDisplay.preco)}</Preco></p>
                  <p>À vista no pix com ate<Preco>10% de desconto R$: {formatPriceBR(precoComDesconto)}</Preco></p>
                  <p>Em ate 8x sem juros <Preco>R$: {formatPriceBR(parcelaSemJuros)}</Preco></p>
                </>
              )}
            </ProdutoPrice>
          </ContainerProduto>
          <AddToCartButton></AddToCartButton>
        </section>
        <Description>
          <div>
            <h2>-Informações Adicionais</h2>
            <h3>-{productToDisplay?.descricao}</h3>
          </div>
          <DescriptionDiv>
            <div>
              <Markdown>{productToDisplay?.propriedades}</Markdown>
            </div>
            <div>
              <Markdown>{productToDisplay?.recomendacoes}</Markdown>
            </div>
            <div>
              <Markdown>{productToDisplay?.observacoes}</Markdown>
            </div>
          </DescriptionDiv>
          
        </Description>
        <Relatedproducts>
          <h2>Produtos Relacionados</h2>
          <GridProdutos>
            {productToDisplayCard.slice(0, 4).map((produto) => (
              <ProductCard key={produto.id} product={produto}></ProductCard>
            ))}
          </GridProdutos>
        </Relatedproducts>
      </article>
    </Main>
  );
};
export default ProductDetails;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    article{
      width: 100%;
    }
    section{
      text-align: center;
    }
`
const ContainerProduto = styled.div`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(300px, 50%));
  justify-content: center;
`
const ProdutoImg = styled.div`
  img{
    padding: 30px; 
    border-radius: 60px;
  }
`
const ProdutoPrice = styled.div`
  margin: 30px;
  text-align: start;
  background-color: #50336C;
  border-radius: 5px;
  line-height: 3rem;
  p{
    color: white;
    padding: 10px;
    text-align: left;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    line-height: 2rem;
  }
`
const Estoque = styled.span`
  color: #13e013;
  font-weight: 600;
  font-size: 18px;
`
const Span = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-left: 5px;
`
const Preco = styled(Span)`
  color: #ff0000;
  font-size: 24px;
`
const Description = styled.div`
  margin: 30px;
  text-align:center;
  p{
    font-size: 16px;
    font-weight: bold;
  }
  span{
    font-size: 20px;
    font-weight: 400;
  }
  h2{
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
  h3{
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
  }
`
const DescriptionDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  text-align: start;
  gap: 10px;
`
const Relatedproducts = styled.div`
  margin: 30px;
  h2 {
    margin: 10px;
  }
`
const GridProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
    gap: 20px;
    justify-content: center;
    div{
        padding: 10px;
        text-align: center;
        background-color: #ac64b6b9;
        border-radius: 10px;
        max-height:400px;
        &:hover{
            cursor: pointer;
        }
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

