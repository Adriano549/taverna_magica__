import { useState } from "react";
import styled from "styled-components";
import PagamentoPix from "./pix";
import PagamentoCartao from "./cartao";
import { useLocation } from "react-router-dom";
import formatPriceBR from "../../reutilizavel/formatiPrice";




const Pagamento = () => {
    const {state : {pagamento}} = useLocation();
    const [paymentMethod, setPaymentMethod] = useState("");
   
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    
    if (!pagamento ) {
        return <p>Carregando detalhes do pagamento...</p>;
      }
    
    
    
    return (
        <Main>
            <Container>
            <RadioCheck>
                <label>
                    <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="pix"
                    onChange={handlePaymentMethodChange}/>
                    Pix
                </label>
                <label>
                    <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="cartao"
                    onChange={handlePaymentMethodChange}/>
                    Cartão de Crédito
                </label>
                <label>
                    <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="boleto"
                    onChange={handlePaymentMethodChange}/>
                    Boleto
                </label>
                
            </RadioCheck>
            { paymentMethod === "pix" && (
                <PagamentoPix pagamento={pagamento} />
            )}
            {paymentMethod === "cartao" && (
                <PagamentoCartao pagamento={pagamento}/>
            )}
            {paymentMethod === "boleto" && (
                <FormaPagamento>
                    <h3>Informações para Pagamento via Boleto</h3>
                    <p>
                    Para efetuar o pagamento via boleto, imprima o boleto
                    abaixo e pague no banco ou caixa eletrônico.
                    </p>
                    <div>
                    <p>Valor da compra: {formatPriceBR(pagamento.total)} / Frete: {formatPriceBR(pagamento.frete)}</p>
                    <p>Total com Frete {formatPriceBR(pagamento.totalCompra)}</p>
                    </div>
                    <button>Pagar via Boleto</button>
                </FormaPagamento>
            )}
            </Container>
        </Main>
    )
}

export default Pagamento;

const Main = styled.main`
    display: flex;
    justify-content: center;
    padding: 10px;
`
const Container = styled.div`
    text-align: center;
    background-color: #ffffffe6;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 50px rgba(15, 15, 15, 0.6);
    span {
        text-decoration: line-through;
    }button {
        padding: 10px 20px;
        background-color: #65276b;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }
`
const FormaPagamento = styled.div`
    font-weight: bold;
    margin: 10px;
    div{
        padding: 20px;
        text-align: start;
        p{
            margin-top: 10px;
            border-bottom: solid 1px #be8abe;
        }
    }
`

const RadioCheck = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
    label {
        display: block;
        cursor: pointer;
    }
    input {
        margin-right: 5px;
        
    }
    label:nth-child(1) {
        color: #303030;
    }
    label:nth-child(2) {
        color: #65276b;
    }
    label:nth-child(3) {
        color: #ff5e5e;
    }
`

