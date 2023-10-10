/**
*convertor de milhas em km

(quantidade de milhas) x 1,609344 = quilômetros
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


let lucro,custo,preco,porcentagem

console.log("__________________________________")
console.log("")
            
//entrada 
 preco = Number(read.question('qual o valor da compra? (voce vendendo): ').replace (",","."))
 custo = Number(read.question('qual o valor do produto (fora da sua loja)?: ').replace (",","."))

//Processamento 
lucro =  preco - custo


//saida 

console.log('|=================================')
console.log(`|${lucro.toFixed(2)}de lucro`)
console.log('|=================================')

//processamento 
porcentagem = (lucro / preco) * 100

//saida 2
console.log('|=================')
console.log(`|lucro de ${porcentagem.toFixed(2)}%`)
console.log('|=================')




/**
 *custo do produto
 preco da venda
 lucro

 *  Preço de venda: R$ 250
Custos do produto: R$ 200 
Lucro: R$ 250 – R$ 200 = R$ 50 
Porcentagem de lucro do produto: R$ 50 ÷ R$ 250 = 0,2 x 100 = 20%
 */