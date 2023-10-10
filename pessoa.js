/**
 * POO - Estudo do encapsulamento
 */

//classe modelo 
class Pessoa {
    //atributos
    constructor(nome, idade) {
    this.nome = nome //variável publica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    let _idade = idade //let_idade (encapsular a variavel)
    //métodos get e set (para acessar a váriavel idade)
    this.getIdade = () => {
        return _idade
    }
    this.setIdade = function (novaIdade) {
        _idade = novaIdade
    }
//-----------------------------------------------------------------------------------
}
 
    //métodos (ações)
    apresentar() { 
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.getIdade()} anos`)
    }
}
console.clear()
/*** instanciar(criar) objetos ***/
const pessoa1 = new Pessoa("josé", 55)
pessoa1.apresentar()
pessoa1.setIdade(56)
pessoa1.apresentar()