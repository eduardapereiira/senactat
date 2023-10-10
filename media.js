/**
 * App para calcular a media de 2 notas
 */

//importação do pacote radline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors =  require ("colors")

//variaveis
let nota1, nota2, media
let nome, disciplina 

console.clear()
console.log("'########:::'#######::'##:::::::'########:'########:'####:'##::::'##:")
console.log("##.... ##:'##.... ##: ##::::::: ##.....::... ##..::. ##:: ###::'###:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ####'####:")
console.log("########:: ##:::: ##: ##::::::: ######:::::: ##::::: ##:: ## ### ##:")
console.log("##.... ##: ##:::: ##: ##::::::: ##...::::::: ##::::: ##:: ##. #: ##:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ##:.:: ##:")
console.log("########::. #######:: ########: ########:::: ##::::'####: ##:::: ##:")
console.log("........::::.......:::........::........:::::..:::::....::..:::::..::")
console.log('')


//entrada
Nome = read.question('Digite o Nome: ')
disciplina = read.question('Digite a Disciplina: ')
nota1 = Number (read.question('Digite a Nota1: ').replace (",","."))
nota2 = Number(read.question('Digite a nota2: ').replace (",","."))

//processamento
media =(nota1 + nota2)/2

//saida
console.clear()
console.log('---------------------------------')
console.log('Ficha do aluno'.bold)
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota 1: ${nota1}`)
console.log(`Nota 2: ${nota2}`)
console.log(`Média Final ${media}`)
 if (media<5){
    console.log("REPROVADO".red)
 } else {
    console.log ("APROVADO".green)
 }


console.log('---------------------------------')