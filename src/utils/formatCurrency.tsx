export default function formatCurrency(value: number) {
    if (value) return value.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}) 
};