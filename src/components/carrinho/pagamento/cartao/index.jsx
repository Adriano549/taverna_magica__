import formatPriceBR from "../../../reutilizavel/formatiPrice";
import Parcelamentos from "./parcelamento/parcelamento";
import { useState } from "react";
import { FormaPagamentoCartao, CreditCardInfo , Valores } from "./styledCartao";

const PagamentoCartao = ({pagamento}) => {
    const [numeroCartao, setNumeroCartao] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [cvv, setCvv] = useState('');
    const [validadeCartao, setValidadeCartao] = useState('');
    const [verificar , setVerificar] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [success, setSuccess] = useState('');
    const [dataNascimento , setDataNascimento] = useState('')

    const precoComDesconto = pagamento.totalCompra* 0.1;
    const quantiaDoDesconto = pagamento.totalCompra - precoComDesconto
    const handlePagamentoFeito = (e) =>{
        e.preventDefault();
        if(!numeroCartao || !nomeCartao || !validadeCartao || !cvv || !cpfCnpj || !dataNascimento || !verificar) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        setSuccess('Pagamento realizado com sucesso!');
        setNomeCartao('');
        setNumeroCartao('');
        setValidadeCartao('');
        setCvv('');
        setCpfCnpj('');
        setDataNascimento('')
        setVerificar('')
    }

    return (
        <FormaPagamentoCartao>
            <h3>Informações para Pagamento via Cartão de Crédito</h3>
            <CreditCardInfo>
                <input type="number" placeholder="Número do Cartão" alt="Número do Cartão"  value={numeroCartao} onChange={(e) => setNumeroCartao(e.target.value)}/>
                <input type="text" placeholder="Nome Impresso no cartão" alt="Nome Impresso no cartão" value={nomeCartao} onChange={(e) => setNomeCartao(e.target.value)}/>
                <input type="number" placeholder="CVV" alt=" Valor Verificador de Cartão" value={cvv} onChange={(e) => setCvv(e.target.value)}/>
                <input type="number" placeholder="Data de Validade" alt="Data de Validade" value={validadeCartao} onChange={(e) => setValidadeCartao(e.target.value)}/>
                <input type="number" placeholder="Código de verificação" alt="Código de verificação" value={verificar} onChange={(e) => setVerificar(e.target.value)}/>
                <input type="number" placeholder="CPF/CNPJ do titular" alt="CPF/CNPJ do titular" value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)}/>
                <div>
                    <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
                    <label>Data de nascimento</label>
                </div>
            </CreditCardInfo>
            <Valores>
            <div>
                <p>Valor da compra:{formatPriceBR(pagamento.total)}</p>
                <p>Frete:{formatPriceBR(pagamento.frete)}</p>
                <p>Total com Frete {formatPriceBR(pagamento.totalCompra)}</p>
                <p>A vista 10% de desconto</p>
                <p>{formatPriceBR(quantiaDoDesconto)} <span>{formatPriceBR(precoComDesconto)}</span></p>
            </div>
            <Parcelamentos valorCompra={pagamento.totalCompra}/>
            </Valores>
            <button onClick={handlePagamentoFeito}>Pagar via Cartão</button>
            {success && <p style={{color: "green"}}>{success}</p>}
        </FormaPagamentoCartao>
    )
}

export default PagamentoCartao

