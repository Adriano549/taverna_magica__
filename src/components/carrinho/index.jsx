import { useContext, useState } from "react";
import ProdutoContext from "../context/produtocontext";
import formatPriceBR from "../reutilizavel/formatiPrice";
import { Main, InputCep , ResumoPedido } from "./styledCarrinhosProdutos";
import useCep from "../cepApi/useCep";
import { useNavigate } from "react-router-dom";
import useCarrinhoCalculations from "../reutilizavel/calculos";
import CarrinhoItem from "./carrinhoitem/carrinhoitem";

const CarrinhoProdutos = () => {
    const { carrinho, removerDoCarrinho, adicionarAoCarrinho } = useContext(ProdutoContext);
    const { cep, handleCepChange, address, error: cepError } = useCep("");
    const navigate = useNavigate();
    const { carrinhoComQuantidade, totalCarrinho, opcoesFrete, freteSelecionado, setFreteSelecionado, precoComDesconto, parcelaSemJuros } = useCarrinhoCalculations(carrinho, cep);
    const [numeroResidencia, setNumeroResidencia] = useState("");

    const handleAddMore = (itemId) => {
        adicionarAoCarrinho(itemId);
    };
  
    const handleRemove = (item) => {
        removerDoCarrinho(item);
    };

    const handleNumeroResidenciaChange = (event) => {
        const numeroInserido = event.target.value;
        if (!numeroInserido) {
            setNumeroResidencia("");
            return;
        }
        if (numeroInserido.trim() !== "" && !isNaN(numeroInserido)) {
            setNumeroResidencia(numeroInserido);
        }
    };

    const handleFreteChange = (event) => {
        setFreteSelecionado(parseFloat(event.target.value));
    };

    const handleFinalizarCompra = () => {
        if (!address.localidade || !address.bairro || !address.logradouro || !address.uf || !numeroResidencia) {
            alert("Por favor, preencha todos os campos do endereço.");
            return;
        }
        const updatedPagamento = {
            total: totalCarrinho ,
            frete: freteSelecionado,
            desconto: precoComDesconto - (totalCarrinho + freteSelecionado),
            totalCompra: totalCarrinho + freteSelecionado,
            pix: precoComDesconto,
        };
        navigate("/pagamento", { state: { pagamento: updatedPagamento } });
    };

    return (
        <Main>
            <section>
                <h2>Carrinho</h2>
                <ul>
                    {carrinhoComQuantidade.map((item, index) => (
                        <CarrinhoItem key={index} item={item} handleAddMore={handleAddMore} handleRemove={handleRemove} />
                    ))}
                </ul>
                {carrinhoComQuantidade.length === 0 ? (
                    <p>Seu carrinho está vazio. Adicione produtos para finalizar a compra</p>
                ) : (
                    <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
                )}
            </section>
            <ResumoPedido>
                <h2>Resumo do Pedido</h2>
                <p>Total: R$ {formatPriceBR(totalCarrinho + freteSelecionado)}</p>
                <p>Frete: {formatPriceBR(freteSelecionado)}</p>
                <p>Pagamento no pix temos 15% de desconto</p>
                <p>Total no pix: {formatPriceBR(precoComDesconto)}</p>
                <p>Parcelamento até 8x sem juros {formatPriceBR(parcelaSemJuros)}</p>
                <label>CEP:</label>{cepError && <span style={{ color: "red" }}>{cepError}</span>}
                <input type="text" value={cep} onChange={(e) => handleCepChange(e.target.value)} />
                <InputCep>
                    <label>Endereço:</label>
                    <input type="text" value={address.logradouro} disabled />
                    <input type="text" value={address.bairro} disabled />
                    <input type="text" value={address.localidade} disabled />
                    <input type="text" value={address.uf} disabled />
                    <input
                        type="text"
                        placeholder="Número da residência"
                        value={numeroResidencia}
                        onChange={handleNumeroResidenciaChange}
                    />
                </InputCep>
                <label>Escolha o frete:</label>
                <select value={freteSelecionado} onChange={handleFreteChange}>
                    
                    {opcoesFrete.map((opcao, index) => (
                        <option key={index} value={opcao.valor}>
                            {opcao.nome} - {formatPriceBR(opcao.valor)}
                        </option>
                    ))}
                </select>
            </ResumoPedido>
        </Main>
    );
}

export default CarrinhoProdutos;

