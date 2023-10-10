/**
 * Estudo das estruturas de controle
 * While | do while
 */

const read = require('readline-sync')

 let x = 1
 let y = 1

 while (x < 11){
   //console.log("Teste")
   console.log(x)
    x++
 }
read.question("Pressione a tecla [enter] ")
console.clear()

 do {
    //console.log("Teste da estrutur ado while")
    console.log(y)
    y++
 } while (y < 11)
