/*
2. Dado um array de caracteres, inverta os caracteres.
Exemplo:
Array: ['d', 'i', 'a']
Saída: ['a', 'i', 'd']*/

let array = [31, 7, 2, 89, 67, 45, 30]

let numeroInvertido

for(let i = 0; i < array.length / 2; i++) {
    numeroInvertido = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = numeroInvertido
}

console.log(array)