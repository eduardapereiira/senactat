/**
 * Calculos de converçaõ em pes para metros 
 * m =ft/3.2808
 */

const read = require('readline-sync')

//importação do pacote colors
const colors =  require ("colors")

//variaveis
let metros, pes


console.clear()
console.log('')                                                                              
console.log(' ####   ####  #    # #    # ###### #####   ####   ####  #####  ')
console.log('#    # #    # ##   # #    # #      #    # #      #    # #    # ')
console.log('#      #    # # #  # #    # #####  #    #  ####  #    # #    # ')
console.log('#      #    # #  # # #    # #      #####       # #    # #####  ')
console.log('#    # #    # #   ##  #  #  #      #   #  #    # #    # #   #  ')
console.log('####   ####  #    #   ##   ###### #    #  ####   ####  #    # ')
                                                               
                                                       
console.log('#####  ######    #####  ######  ####     ###### #    # ')
console.log('#    # #         #    # #      #         #      ##  ## ')
console.log('#    # #####     #    # #####   ####     #####  # ## # ')
console.log('#    # #         #####  #           #    #      #    # ')
console.log('#    # #         #      #      #    #    #      #    # ')
console.log('#####  ######    #      ######  ####     ###### #    # ')
                                                       
                                         
console.log('#    # ###### ##### #####   ####   ####  ')
console.log('##  ## #        #   #    # #    # #      ')
console.log('# ## # #####    #   #    # #    #  ####  ')
console.log('#    # #        #   #####  #    #      # ')
console.log('#    # #        #   #   #  #    # #    # ')
console.log('#    # ######   #   #    #  ####   ####  ')
                                        



//entrada 

pes = Number(read.question("Quantos pes deseja converter: ").replace (",","."))

//processamento
metros = pes / 3.2808

//saida
console.clear()
console.log('---------------------------------')
console.log(`Medida em metros: ${metros.toFixed(4)}`)
console.log('---------------------------------')