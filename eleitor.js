/**
 * ELEITOR 
 */

//importação do pacote radline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors = require("colors")

//variaveis
let idade

console.clear()
console.log("'########:'##:::::::'########:'####:'########::'#######::'########::".blue)
console.log("##.....:: ##::::::: ##.....::. ##::... ##..::'##.... ##: ##.... ##:".blue)
console.log("##::::::: ##::::::: ##:::::::: ##::::: ##:::: ##:::: ##: ##:::: ##:".blue)
console.log("######::: ##::::::: ######:::: ##::::: ##:::: ##:::: ##: ########::".blue)
console.log("##...:::: ##::::::: ##...::::: ##::::: ##:::: ##:::: ##: ##.. ##:::".blue)
console.log("##::::::: ##::::::: ##:::::::: ##::::: ##:::: ##:::: ##: ##::. ##::".blue)
console.log("########: ########: ########:'####:::: ##::::. #######:: ##:::. ##:".blue)
console.log("........::........::........::....:::::..::::::.......:::..:::::..::".blue)

//entrada
idade = Number(read.question('Digite sua idade: ').replace(",", "."))

//verdadeiro ou falso
if (idade < 16) {
    console.log("=Proibido votar!!=".red)
} else if (idade === 16 | idade === 17 | idade > 70) {
    console.log("=Voto facutativo=".yellow)
} else {
    console.log("=Obrigatorio votar!!=".green)
}