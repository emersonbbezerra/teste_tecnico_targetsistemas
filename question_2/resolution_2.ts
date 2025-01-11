function isFibonacci(num: number): boolean {
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return b === num || num === 0;
}

const input = 21; // Inclua aqui o número que deseja verificar
if (isFibonacci(input)) {
    console.log(`${input} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${input} não pertence à sequência de Fibonacci.`);
}
