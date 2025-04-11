/*Dado um array de números, coloque o array em ordem crescente.*/

let array = [31, 7, 2, 89, 67, 45, 30]

let numeroNovo

for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        if(array[j] > array[j + 1]) {
            numeroNovo = array[j]
            array[j] = array[j + 1]
            array[j + 1] = numeroNovo
        }
    }
}

console.log(array)