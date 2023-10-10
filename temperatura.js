/**
*Conversao de temperatura
*/

// importação do pacote readline-sync
const read = require('readline-sync')

let c
let f

console.clear()

//entrada
f = Number(read.question('qual a temperatura em fahrenheit: ').replace (",","."))


//Processamento
c =Number((f-32)*5/9)

//saida
console.clear()
console.log('---------------------------------')
console.log('Temperatura convertida: ')
console.log(`celsius: ${c.toFixed(0)}ºC`)
console.log('---------------------------------')