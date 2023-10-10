/**
*Porcentagem em Regra de 3
*/

// importação do pacote readline-sync
const read = require('readline-sync')

console.clear
console.log("=====================")
console.log("==  Regra de Três  ==")
console.log("== X % de Y= Valor ==")
console.log("=====================")
let x
let y
let valor

console.clear()

//entrada
x = Number(read.question('qual o valor de x para ser efetuado o calculo: ').replace (",","."))
y = Number(read.question('qual o valor de y para ser efetuado o calculo: ').replace (",","."))

//Processamento
valor= x*y/100

//saida
console.clear()
console.log('|=================================')
console.log(`|${x}% X de ${y} = ${valor}`)
console.log('|=================================')

