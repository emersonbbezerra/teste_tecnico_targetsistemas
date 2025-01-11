import fs from 'fs';
import { IDailyBilling } from './IDailyBilling';

const rawData = fs.readFileSync('./data.json');
const billingData: IDailyBilling[] = JSON.parse(rawData.toString());

let lowest = Infinity, highest = -Infinity, total = 0, count = 0;

billingData.forEach(entry => {
    if (entry.valor > 0) {
        if (entry.valor < lowest) lowest = entry.valor;
        if (entry.valor > highest) highest = entry.valor;
        total += entry.valor;
        count++;
    }
});

if (count === 0) {
    console.log('Nenhum dia com valor de faturamento positivo encontrado.');
} else {
    const average = total / count;
    const daysAboveAverage = billingData.filter(entry => entry.valor > average).length;

    console.log(`Menor valor: ${lowest}`);
    console.log(`Maior valor: ${highest}`);
    console.log(`Dias com faturamento acima da média: ${daysAboveAverage}`);
}
