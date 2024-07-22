import { useState, useEffect } from "react";

const useCarrinhoCalculations = (carrinho, cep) => {
    const [carrinhoComQuantidade, setCarrinhoComQuantidade] = useState([]);
    const [totalCarrinho, setTotalCarrinho] = useState(0);
    const [opcoesFrete, setOpcoesFrete] = useState([]);
    const [freteSelecionado, setFreteSelecionado] = useState(0);
    const [precoComDesconto, setPrecoComDesconto] = useState(0);
    const [parcelaSemJuros, setParcelaSemJuros] = useState(0);
    
    useEffect(() => {
        const updatedCarrinho = carrinho.reduce((acc, item) => {
            const produtoExistente = acc.find((produto) => produto.id === item.id);
            if (produtoExistente) {
                produtoExistente.quantidade++;
            } else {
                acc.push({ ...item, quantidade: 1 });
            }
            return acc;
        }, []);
        setCarrinhoComQuantidade(updatedCarrinho);

        const total = updatedCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        setTotalCarrinho(total);

        const opcoesFrete = calculateFrete(cep, total);
        setOpcoesFrete(opcoesFrete);
        
        if (opcoesFrete.length > 0){
            setFreteSelecionado(opcoesFrete[0].valor)
        }
    }, [carrinho, cep]);

    useEffect(() => {
        const total = totalCarrinho + freteSelecionado;
        const desconto = total * 0.15;
        setPrecoComDesconto(total - desconto);
        setParcelaSemJuros(total / 8);
    }, [freteSelecionado, totalCarrinho]);
    

    const calculateFrete = (cep, totalCarrinho) => {
        const opcoes = [];
        if (cep.length === 8) {
            const firstDigit = cep.charAt(0);
            if (firstDigit === "1" || firstDigit === "2" || firstDigit === "3") {
                opcoes.push({ nome: "Padrão", valor: totalCarrinho >= 299 ? 0 : 10 });
                opcoes.push({ nome: "Expresso", valor: 20 });
                opcoes.push({ nome: "portal", valor: 100 });
            } else {
                opcoes.push({ nome: "Padrão", valor: totalCarrinho >= 299 ? 0 : 15 });
                opcoes.push({ nome: "Expresso", valor: 30 });
                opcoes.push({ nome: "portal", valor: 100 });
            }
        }
        return opcoes;
    };

    return {
        carrinhoComQuantidade,
        totalCarrinho,
        opcoesFrete,
        freteSelecionado,
        setFreteSelecionado,
        precoComDesconto,
        parcelaSemJuros,
    };
};

export default useCarrinhoCalculations;
