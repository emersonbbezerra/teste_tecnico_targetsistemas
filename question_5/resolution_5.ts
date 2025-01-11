function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputString = 'Desejo muito colaborar com a empresa! Me dê uma oportunidade!';
console.log(reverseString(inputString));
