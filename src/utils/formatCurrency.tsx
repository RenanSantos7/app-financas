export default function formatCurrency(value: number) {
    if (value === undefined) return 'R$ 0,00';

    return value.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}) 
};