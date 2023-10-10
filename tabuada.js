/**
 * Exemplo de uso do laço for
 */
const read = require('readline-sync')
const colors = require("colors")

let valor 
valor = Number(read.question("Digite a tabuabada desejada: ").replace(",","."))
for (let i = 1;i< 11; i++){
    console.log(`${valor}x${i}=${valor*i} `)
}