import fs from 'fs';
import { IDailyBilling } from './IDailyBilling';



const rawData = fs.readFileSync('./data.json');
const billingData: IDailyBilling[] = JSON.parse(rawData.toString());

let lowest = Infinity, highest = -Infinity, total = 0, count = 0;
billingData.forEach(entry => {
    if (entry.value > 0) {
        if (entry.value < lowest) lowest = entry.value;
        if (entry.value > highest) highest = entry.value;
        total += entry.value;
        count++;
    }
});
const average = total / count;
const daysAboveAverage = billingData.filter(entry => entry.value > average).length;

console.log(`Lowest value: ${lowest}`);
console.log(`Highest value: ${highest}`);
console.log(`Days with billing above average: ${daysAboveAverage}`);
