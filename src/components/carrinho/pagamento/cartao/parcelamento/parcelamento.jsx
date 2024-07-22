import { useState, useEffect } from "react"
import formatPriceBR from "../../../../reutilizavel/formatiPrice";
import { Container, AvisoJuros, Options , SelectOption } from "./styledParcelamento";


const Parcelamentos = ({ valorCompra }) => {
    const taxaJuros = 0.015;

    const [parcelas] = useState(() => {
        const novasParcelas = [];
        const desconto = valorCompra * 0.1
        const valorComDesconto = valorCompra - desconto;

        novasParcelas.push({
            numeroParcelas: 1, // Representando a opção de valor com desconto
            valorParcela: valorComDesconto,
        });

        for (let numeroParcelas = 2; numeroParcelas <= 12; numeroParcelas++) {
            let valorParcela;
            if (numeroParcelas >= 9) {
                const valorComJuros = valorCompra * Math.pow(1 + taxaJuros, numeroParcelas - 1);
                valorParcela = valorComJuros / numeroParcelas;
            } else {
                valorParcela = valorCompra / numeroParcelas;
            }
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
            )} {parcelaSelecionada >= 9 && (
                <AvisoJuros>
                    Atenção: Parcelas a partir da 9ª incluem juros de 1.5% ao mês.
                </AvisoJuros>
            )}
        </Container>
    );
};

export default Parcelamentos;

