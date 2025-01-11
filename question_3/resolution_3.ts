import fs from 'fs';

interface FaturamentoDiario {
    dia: number;
    valor: number;
}

const rawdata = fs.readFileSync('./data.json');
const faturamento: FaturamentoDiario[] = JSON.parse(rawdata.toString());

let menor = Infinity, maior = -Infinity, soma = 0, count = 0;
faturamento.forEach(dia => {
    if (dia.valor > 0) {
        if (dia.valor < menor) menor = dia.valor;
        if (dia.valor > maior) maior = dia.valor;
        soma += dia.valor;
        count++;
    }
});
const media = soma / count;
const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
