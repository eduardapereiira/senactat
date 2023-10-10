/**
*calcular lucro
*/

// importação do pacote readline-sync
const read = require('readline-sync')

console.clear()
console.log("'##:::::::'##::::'##::'######::'########:::'#######::")
console.log(" ##::::::: ##:::: ##:'##... ##: ##.... ##:'##.... ##:")
console.log(" ##::::::: ##:::: ##: ##:::..:: ##:::: ##: ##:::: ##:")
console.log(" ##::::::: ##:::: ##: ##::::::: ########:: ##:::: ##:")
console.log(" ##::::::: ##:::: ##: ##::::::: ##.. ##::: ##:::: ##:")
console.log(" ##::::::: ##:::: ##: ##::: ##: ##::. ##:: ##:::: ##:")
console.log(" ########:. #######::. ######:: ##:::. ##:. #######::")
console.log("........:::.......::::......:::..:::::..:::.......:::")
console.log('')



let custo,lucro,vendas


custo = Number(read.question("digite o valor do custo:  ").replace (",","."))
lucro = Number(read.question("digite o quanto voce deseja lucrar:  ").replace (",","."))

vendas = custo+(custo*lucro)/100


console.log("__________________________________________________________________________________")
console.log(`custo: ${custo.toFixed(2)}`)  
console.log(`lucro:   ${lucro}%`)    
console.log(`vendas:   ${vendas.toFixed(2)}`)
console.log("__________________________________________________________________________________")


