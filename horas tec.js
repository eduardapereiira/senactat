/**
 * Horas tecnicas trabalhadas
 */

const read = require('readline-sync')
console.clear()
const reserva = 30
let rem, custo, inv, horasTec

console.clear()
console.log(".##.....##..#######..########.....###.....######.")
console.log(".##.....##.##.....##.##.....##...##.##...##....##")
console.log(".##.....##.##.....##.##.....##..##...##..##......")
console.log(".#########.##.....##.########..##.....##..######.")
console.log(".##.....##.##.....##.##...##...#########.......##")
console.log(".##.....##.##.....##.##....##..##.....##.##....##")
console.log(".##.....##..#######..##.....##.##.....##..######.")
console.log(".########.########..######..##....##.####..######.....###.....######.")
console.log("....##....##.......##....##.###...##..##..##....##...##.##...##....##")
console.log("....##....##.......##.......####..##..##..##........##...##..##......")
console.log("....##....######...##.......##.##.##..##..##.......##.....##..######.")
console.log("....##....##.......##.......##..####..##..##.......#########.......##")
console.log("....##....##.......##....##.##...###..##..##....##.##.....##.##....##")
console.log("....##....########..######..##....##.####..######..##.....##..######.")

//entarda
rem = Number(read.question("Digite a remuneracao mensal pretendida: ").replace(",","."))
console.log("____________________________________________________")
custo = Number(read.question("Digite o custo operacional: ").replace(",","."))
console.log("____________________________________________________")
inv = Number(read.question("Digite o Investimento: ").replace(",","."))
console.log("____________________________________________________")
horasTec = Number(read.question("Digite a horas trabalhadas por mes: "))
console.log("____________________________________________________")

//processamento
horasTec = (rem+(rem*reserva)/100+custo+(inv*rem)/100)/horasTec

//saida
console.log(horasTec)
console.log("______")