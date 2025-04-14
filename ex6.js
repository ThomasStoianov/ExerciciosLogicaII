// Dado um array de números e um valor, retorne dois números do vetor cuja soma
// seja igual ao número, ou 0 caso não exista.
// Exemplo:
// Vetor: [3, 2, 4]
// Número: [6]
// Saída: [2, 4]

const array = [2, 5, 8, 6]
let numero = 10
let encontrou = false

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === numero) {
            console.log([array[i], array[j]])
            encontrou = true
            break
        }
    }
    if (encontrou) break
}

if (!encontrou) {
    console.log(0)
}