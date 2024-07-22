

const PagamentoConfirmado = () => {
    function keyPixRandom() {
        const numeros = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let keyPix = '';
        for (let i = 0; i < 35; i++) {
            keyPix += numeros.charAt(Math.floor(Math.random() * numeros.length));
        }
        keyPix = keyPix.substring(0, 8) + ' ' + keyPix.substring(8, 21) + ' ' + keyPix.substring(21, 35);
        return keyPix;
    };
    const chavePixAleatoria = keyPixRandom();

    return(
        <>
        <div>
            <h2>Pagamento via Pix</h2>
            <p>Chave Pix: {chavePixAleatoria}</p>
        </div>    
        <div>
            <h2>Pagamento Confirmado</h2>
            <p>Obrigado por comprar na loja do Mágico! Seu pagamento foi confirmado.</p>
        </div>
        </>
    )
}

export default PagamentoConfirmado;