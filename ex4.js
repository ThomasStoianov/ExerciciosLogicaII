// 4. Dado dois arrays de mesmo tamanho, retorne um novo vetor intercalando os elementos 
// Exemplo: 
// Vetor A: [1, 3, 5] 
// Vetor B: [2, 4, 6] 
// Saída: [1, 2, 3, 4, 5, 6] 

let vogais = ["a", "e", "i", "o", "u"]
let consoantes = ["b", "c", "d", "f", "g"]

let intercalado = []

for(let i = 0; i < vogais.length; i++) {
    intercalado.push(vogais[i])
    intercalado.push(consoantes[i])
}

console.log(intercalado)