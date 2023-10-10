/**
*convertor de libra em kg
*/

// importação do pacote readline-sync
const read = require('readline-sync')

console.clear()
console.log('##       #### ########  ########     ###    ')
console.log('##        ##  ##     ## ##     ##   ## ##   ')
console.log('#        ##  ##     ## ##     ##  ##   ##  ')
console.log('##        ##  ########  ########  ##     ## ')
console.log('##        ##  ##     ## ##   ##   ######### ')
console.log('##        ##  ##     ## ##    ##  ##     ## ')
console.log('######## #### ########  ##     ## ##     ## ')
console.log('########     ###    ########     ###       ##    ##  ######   ')
console.log('##     ##   ## ##   ##     ##   ## ##      ##   ##  ##    ##  ')
console.log('##     ##  ##   ##  ##     ##  ##   ##     ##  ##   ##        ')
console.log('########  ##     ## ########  ##     ##    #####    ##   #### ')
console.log('##        ######### ##   ##   #########    ##  ##   ##    ##  ')
console.log('##        ##     ## ##    ##  ##     ##    ##   ##  ##    ## ') 
console.log('##        ##     ## ##     ## ##     ##    ##    ##  ######   ')
console.log('__________________________________')

console.log("")


let libra
let kg

//entrada 1
libra= Number(read.question('quantas libras deseja converter?: ').replace (",","."))


//Processamento 
kg = libra / 2.2046


//saida 

console.log('|=================================')
console.log(`|${kg.toFixed(2)} Kg`)
console.log('|=================================')
            