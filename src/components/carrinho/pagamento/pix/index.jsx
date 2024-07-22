
import styled from "styled-components"
import formatPriceBR from "../../../reutilizavel/formatiPrice";
import { useNavigate } from "react-router-dom";


const PagamentoPix = ({ pagamento }) => {
    const navigate = useNavigate();
   

    const handlePagarViaPix = () => {
        navigate("/pagamento-confirmado");
      };
    


    return (
        <FormaPagamentoPix>
            <h3>Informações para Pagamento via Pix</h3>
            
            <p>Valor da compra:{formatPriceBR(pagamento.total)} / Frete:{formatPriceBR(pagamento.frete)} / Total :{formatPriceBR(pagamento.totalCompra)}</p>

            <p>Pagamento no pix :{formatPriceBR(pagamento.pix)}  <span>{formatPriceBR(pagamento.desconto)}</span></p>
            <div>
                <button onClick={handlePagarViaPix}>Pagar via Pix</button>
            </div>
        </FormaPagamentoPix>
    )
}

export default PagamentoPix;

const FormaPagamentoPix = styled.div`
    text-align: start;
    h3 {
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 5px;
        padding: 10px;
        font-weight: bold;
        border: #65276b solid 1px;
    }
    span {
        font-size: 16px;
        color: #ff5e5e;
    }
    div{
        text-align: center;
    }
    
`