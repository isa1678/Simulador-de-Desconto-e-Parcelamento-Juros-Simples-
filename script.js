document.addEventListener('DOMContentLoaded', function () {
    // Utilitário para formatar moeda (R$) 
    function moedaBR(valor) {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(valor);
    }

    // normaliza entrada (troca vírgula por ponto e converte para número)
    function toNumber(val) {
        if (typeof val === 'number') return val; 
        if (!val && val !== 0) return NaN;
        return parse Float(string(val).trim().replace(',','.'));
    }

    const form = document.getElemetById('form'); 
    const erro = document. getElementById ('erro');
    const resultados = document.getElementById('resultados'); 
    const tabelaSecao = document.getElementById ('tabelaSecao'); 

    const outPrecoComDesconto =
document.getElementById('precoComDesconto');
const outValorParcela = document.getElementById('valorParcela');
const outTotalPagar = document.getElementById('totalPagar');
const outEconomia = document.getElementById('economia');


        

