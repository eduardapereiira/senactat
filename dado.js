/**
 * Jogo de DADO
 */
const read = require('readline-sync')

let face
let escolha = "s"

do {
    console.clear()
    console.log("-------jogo do dado-------------")
    read.question("Precione ENTER para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    switch (face) {
        case 0:
            console.log("")
            console.log(" _______")
            console.log("|       |")
            console.log("|   o   |")
            console.log("|_______|")
            console.log("")
            break

        case 1:
            console.log("")
            console.log(" ______")
            console.log("|o      |")
            console.log("|       |")
            console.log("|______o|")
            console.log("")
            break

        case 2:
            console.log("")
            console.log(" ______")
            console.log("|o      |")
            console.log("|   o   |")
            console.log("|______o|")
            console.log("")
            break
        case 3:
            console.log("")
            console.log(" ______")
            console.log("|o     o|")
            console.log("|       |")
            console.log("|o_____o|")
            console.log("")
            break
        case 4:
            console.log("")
            console.log(" ______")
            console.log("|o     o|")
            console.log("|   o   |")
            console.log("|o_____o|")
            console.log("")
            break
        case 5:
            console.log("")
            console.log(" ______")
            console.log("|o     o|")
            console.log("|o     o|")
            console.log("|o_____o|")
            console.log("")
            break
    }
    escolha = read.question("Deseja jogar novamente(S/N)")
} while (escolha === "s")


