/*5. Dado dois arrays, retorne a intercalação entre eles (os elementos em comum entre
os dois arrays, em qualquer ordem):
Exemplo:
Vetor A: [1, 2, 2, 1]
Vetor B: [2, 2]
Saída: [2, 2]*/ 

let numerosUm = [1, 2, 2, 3, 4]
let numerosDois = [1, 2, 2]

let copia = [...numerosDois]

let resultado = []

for (let i = 0; i < numerosUm.length; i++) {
    let numeroAtual = numerosUm[i]
    
    let posicao = copia.indexOf(numeroAtual)  // Procura o numeroAtual em copia. Retorna a posição ou -1
    
    if (posicao !== -1) { // Se o número foi encontrado na copia
        resultado.push(numeroAtual)
        copia.splice(posicao, 1) // Remove o número encontrado da copia para não ser usado novamente
    }
}

console.log(resultado)