/**
 * Exemplo de uso da estrutura switch case
 */

const read = require('readline-sync')
const colors = require("colors")

console.clear()
console.log("")
console.log("1. Windows")
console.log("2.Linux")
console.log("3. Mac")
opcao = Number(read.question("Escolha um sistema operacional: "))
switch (opcao) {
    case 1:
        console.clear()
        console.log('Carregando o Windows...........')



console.log("                     ....iilllllllllllll")
console.log("         ....iillll  lllllllllllllllllll")
console.log("     iillllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log(" ") 
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     llllllllllllll  lllllllllllllllllll")
console.log("     `^^^^^^lllllll  lllllllllllllllllll")
console.log("           ````^^^^  ^^lllllllllllllllll")
console.log("                          ````^^^^^^llll")
   
        break
    case 2:
        console.clear()
        console.log('Carregando o Linux....')
        
        break
    case 3:
        console.clear()
        console.log('Carregando o Mac........')
console.log("             .:'   ")
console.log("        __ :'__    ")
console.log("     .'`  `-'  ``. ")
console.log("    :          .-' ")
console.log("    :         :    ")
console.log("     :         `-; ")
console.log(")      `.__.-.__.' ")

        break
    default:
        console.log('opção invalida'.red)
        break

}