/*3. Dado um array de caracteres, verifique se ele forma um palíndromo (lê-se da mesma
    forma de frente para trás e de trás para frente.
    Exemplo:
    Array: ['r', 'a', 'd', 'a', 'r']
    Saída: É um palíndromo.*/

let array = ['r', 'a', 'd', 'a', 'r'];
let ehPalindromo = true;
    
for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        ehPalindromo = false;
        break;
    }
}
    
if (ehPalindromo) {
    console.log("É um palíndromo.");
} else {
    console.log("Não é um palíndromo.");
}