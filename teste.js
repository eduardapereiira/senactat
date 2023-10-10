/**
 * vantagem Alcool ou Gasolina
 */

//importação do pacote radline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors = require("colors")

console.log('|=====================')
console.log('|= alcool x gasolina =')
console.log('|=====================')

//variaveis
let alcool, gasolina

//entrada
alcool = Number(read.question('Digite o valor do litro do alcool: ').replace(",", "."))
gasolina = Number(read.question('Digite o valor do litro da gasolina: ').replace(",", "."))

//verdadeiro ou falso
if (alcool < 0.7 * gasolina) {
    console.log("Rvale a pena alcool".blue)
} else {
    console.log("Avale a pena gasolina".green)
}