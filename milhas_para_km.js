/**
*convertor de milhas em km

(quantidade de milhas) x 1,609344 = quilômetros
*/

// importação do pacote readline-sync
const read = require('readline-sync')

console.clear()
console.log("'##::::'##:'####:'##:::::::'##::::'##::::'###:::::'######::")
console.log("###::'###:. ##:: ##::::::: ##:::: ##:::'## ##:::'##... ##:")
console.log(" ####'####:: ##:: ##::::::: ##:::: ##::'##:. ##:: ##:::..::")
console.log("## ### ##:: ##:: ##::::::: #########:'##:::. ##:. ######::")
console.log(" ##. #: ##:: ##:: ##::::::: ##.... ##: #########::..... ##:")
console.log("##:.:: ##:: ##:: ##::::::: ##:::: ##: ##.... ##:'##::: ##:")
console.log("##:::: ##:'####: ########: ##:::: ##: ##:::: ##:. ######::")
console.log("..:::::..::....::........::..:::::..::..:::::..:::......:::")
console.log("'########:'##::::'##::::'##:::'##:'##::::'##:")
console.log("##.....:: ###::'###:::: ##::'##:: ###::'###:")
console.log("##::::::: ####'####:::: ##:'##::: ####'####:")
console.log("######::: ## ### ##:::: #####:::: ## ### ##:")
console.log(" ##...:::: ##. #: ##:::: ##. ##::: ##. #: ##:")
console.log(" ##::::::: ##:.:: ##:::: ##:. ##:: ##:.:: ##:")
console.log("########: ##:::: ##:::: ##::. ##: ##:::: ##:")
console.log("........::..:::::..:::::..::::..::..:::::..::")
console.log('')


let milhas
let quilometro

console.log("__________________________________")
console.log("")
            
//entrada 1
milhas = Number(read.question('quantas milhas deseja converter?: ').replace (",","."))


//Processamento 
quilometro = milhas * 1.609344 


//saida 

console.log('|=================================')
console.log(`|${quilometro.toFixed(2)} Km`)
console.log('|=================================')








