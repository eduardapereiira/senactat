/**
 * Exercício de fixação POO
 */

class Conta {
    //atributos
    constructor (numero, titular, saldo){
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    //métodos
    exibirSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)
        } 
        depositar(valor) {
            this.saldo += valor
            console.log(`Crédito de R$ ${valor.toFixed(2)}`)
        }
        sacar(valor) {
            //validação
            if (valor <= this.saldo)
            console.log(`Débito de R$ ${valor.Tofixed(2)}`)
        } else {
            console.log("saque não permitido")
        }
    }

//herança
class contaPoupanca extends Conta {
    //atributos
    constructor (numero, titular, saldo) {
        super (numero, titular, saldo)
    }
    //métodos
    exibirSaldoPoupanca() {
        console.log(`Saldo de POupança: R$ ${this.saldo.toFixed(2)}`)
    }
} 

/*** clientes ****/

    
console.log("") 
console.log("$$$$$$$\   $$$$$$\  $$\   $$\ $$\   $$\ ")
console.log("$$  __$$\ $$  __$$\ $$$\  $$ |$$ | $$  |")
console.log("$$ |  $$ |$$ /  $$ |$$$$\ $$ |$$ |$$  / ")
console.log("$$$$$$$\ |$$$$$$$$ |$$ $$\$$ |$$$$$  /  ")
console.log("$$  __$$\ $$  __$$ |$$ \$$$$|$$  $$<    ")
console.log("$$ |  $$ |$$ |  $$ |$$ |\$$$ |$$ |\$$\  ")
console.log("$$$$$$$  |$$ |  $$ |$$ | \$$ |$$ | \$$\ ")
console.log("\_______/ \__|  \__|\__|  \__|\__|  \__|")
console.log("")

//instanciar um objeto
let cc1 = new Conta(1, "Leandro Ramos", 10000)
console.log(`Cliente: ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(50000)
cc1.exibirSaldo()
cc1.sacar(8000)
let cc1p = new contaPoupanca(5001, "lenadro Ramos", 10000)
cc1p.exibirSaldoPoupanca                                        

