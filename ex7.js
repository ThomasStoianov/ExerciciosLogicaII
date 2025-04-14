//7. Dado um array ordenado, encontre a mediana dos elementos 
// Exemplo: 
//Vetor: [1, 2, 3, 4, 5, 6] 
//Saída: 3.5

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let tamanho = numeros.length
let meio = numeros.length / 2

let mediana

if (tamanho % 2 === 0) {
    let esquerda = numeros[meio - 1]
    let direita = numeros[meio]
    mediana = (esquerda + direita) / 2
} else {
    let indice = (tamanho - 1) / 2
    mediana = numeros[indice]
}

console.log(mediana)