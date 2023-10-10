/**
 * jogo JoKenPo
 */

const read = require("readline-sync")
const colors = require("colors")

let escolha, pc

console.clear()

console.log("::::::'##::'#######::'##:::'##:'########:'##::: ##:'########:::'#######::")
console.log(":::::: ##:'##.... ##: ##::'##:: ##.....:: ###:: ##: ##.... ##:'##.... ##:")
console.log(":::::: ##: ##:::: ##: ##:'##::: ##::::::: ####: ##: ##:::: ##: ##:::: ##:")
console.log(":::::: ##: ##:::: ##: #####:::: ######::: ## ## ##: ########:: ##:::: ##:")
console.log("'##::: ##: ##:::: ##: ##. ##::: ##...:::: ##. ####: ##.....::: ##:::: ##:")
console.log("##::: ##: ##:::: ##: ##:. ##:: ##::::::: ##:. ###: ##:::::::: ##:::: ##:")
console.log(". ######::. #######:: ##::. ##: ########: ##::. ##: ##::::::::. #######::")
console.log(":......::::.......:::..::::..::........::..::::..::..::::::::::.......:::")

console.log("1. Pedra".italic)
console.log("   ____     ")
console.log(" _/  _ \\   ")
console.log("/ _ - _ \\  ")
console.log("\\_______/  ")
console.log()
console.log("2. Papel".italic)
console.log("   _____  ")
console.log("  O_____O ")
console.log("  /     / ")
console.log(" /____ /  ")
console.log("O_____O   ")
console.log()
console.log("3. Tesoura".italic)
console.log("    _    _   ")
console.log("   (_)  / )  ")
console.log("     | (_/   ")
console.log("    _+/      ")
console.log("   //|\\     ")
console.log("  // ||      ")
console.log(" (/  |/      ")
console.log()

escolha = Number(read.question("Digite a opcao desejada: ".italic))

pc = Math.floor(Math.random() * 3 + 1)

if (escolha == 1) {
    console.log(`Jogador escolheu pedra`.italic)
} else if (escolha == 1) {
    console.log("Jogador escolheu papel".italic)
} else {
    console.log("Jogador escolheu tesoura".italic)
}

console.clear()
if (pc == 1) {
    console.log(`Computador escolheu pedra`.italic)
} else if (pc == 1) {
    console.log("Computador escolheu papel".italic)
} else {
    console.log("Computador escolheu tesoura".italic)
}

if (escolha == pc) {
    console.log()
    console.log("┌─┐┌┬┐┌─┐┌─┐┌┬┐┌─┐ ")
    console.log("├┤ │││├─┘├─┤ │ ├┤  ")
    console.log("└─┘┴ ┴┴  ┴ ┴ ┴ └─┘ ")
} else if (escolha == 1 && pc == 3 || escolha == 2 && pc == 1 || escolha == 3 && pc == 2) {
    console.log()
    console.log("┬  ┬┌─┐┌┐┌┌─┐┌─┐┬ ┬ ")
    console.log("└┐┌┘├┤ ││││  ├┤ │ │ ")
    console.log(" └┘ └─┘┘└┘└─┘└─┘└─┘ ")
} else {
    console.log("┌─┐┌─┐┬─┐┌┬┐┌─┐┬ ┬ ")
    console.log("├─┘├┤ ├┬┘ ││├┤ │ │ ")
    console.log("┴  └─┘┴└─ ┴┘└─┘└─┘ ")
}

