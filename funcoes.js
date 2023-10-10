/**
 * Estudo das funções
 */

//Função simples
function hello (){
    console.log("Hello word")
}

//para executar uma função basta escrever o nome da função junto com parênteses]
hello()

//função atribuida
const hello2 = function(){
    console.log("hello function atribuida")
}

hello2()

//função atribuida simplificada (arrow function)
const hello3 = function(){
    console.log("hello arrow function atribuida")
}

hello3()

console.log(typeof(hello3))