export default function formatPriceBR(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

