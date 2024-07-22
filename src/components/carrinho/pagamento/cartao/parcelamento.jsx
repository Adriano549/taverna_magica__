import { useState, useEffect } from "react"
import formatPriceBR from "../../../reutilizavel/formatiPrice";
import styled from "styled-components";


const Parcelamentos = ({ valorCompra }) => {
    const [parcelas] = useState(() => {
        const novasParcelas = [];
        const desconto = valorCompra * 0.1
        const valorComDesconto = valorCompra - desconto;

        novasParcelas.push({
            numeroParcelas: 1, // Representando a opção de valor com desconto
            valorParcela: valorComDesconto,
        });

        for (let numeroParcelas = 2; numeroParcelas <= 12; numeroParcelas++) {
            const valorParcela = valorCompra / numeroParcelas;
            novasParcelas.push({
                numeroParcelas,
                valorParcela,
            });
        }
        return novasParcelas;
    });
    const [parcelaSelecionadaInicial] = useState(1);
    const [parcelaSelecionada, setParcelaSelecionada] = useState(parcelaSelecionadaInicial);

    useEffect(() => {
        setParcelaSelecionada(parcelaSelecionadaInicial);
    }, [parcelas]);


    const handleParcelaClick = (numeroParcelas) => {
        setParcelaSelecionada(numeroParcelas);
    };

    return (
        <Container>
            <h2>Opções de Parcelamento</h2>
            <p>Valor da Compra: R$ {valorCompra}</p>

            {parcelas.length > 0 && (
                <SelectOption value={parcelaSelecionada} onChange={(event) => setParcelaSelecionada(event.target.value)}>
                    <Options value={null}>Selecionar Parcela</Options>
                    {parcelas.map((parcela) => (
                        <Options key={parcela.numeroParcelas} value={parcela.numeroParcelas}>
                            {parcela.numeroParcelas}x {formatPriceBR(parcela.valorParcela)}
                        </Options>
                    )
                    )}
                </SelectOption>
            )}
        </Container>
    );
};

export default Parcelamentos;

const Container = styled.div`
    text-align: center;
    h2{
        margin:5px;
        font-size: 22px;
    }
`

const SelectOption = styled.select`
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #b964b5;
    cursor: pointer;
    color: #592c5e;
    font-size: 14px;
    :hover{
        border: 1px solid #65276b;
    }

`
const Options = styled.option`
    color: #592c5e;
    background-color: #ffffff;
    border: none;
    text-align: center;
    
`


