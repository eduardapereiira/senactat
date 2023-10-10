/**
 * POO - fundamentos da programação orientada a objetos
 * Exemplo: jogo  Minecraft
 */

// Classe modelo (abstração)
class Bloco {
    //atributos
    constructor(resistencia,textura) {
        this.resistencia = resistencia
        this.textura = textura
    }  
    //ações (métodos)
    criarBloco() {
        console.log("----------------------------------")
        console.log("┍─┑")
        console.log("┕─┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

construir() {
    console.log(`Bloco de ${this.textura} colocado`)
}
minerar() {
    console.log("▇ ▇ ▇ Recursos obtidos")
}
}

// classe modelo com herança(extends)
class Enxada extends Bloco {
    //atributos 
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista =  conquista
    }
// método
criarEnxada() {
    console.log("--------------------------")
    console.log("-_")
    console.log(" /")
    console.log(`Enxada de ${this.textura}`)
    console.log(`Resistencia: ${this.resistencia}`)

}

arar() {
    console.log("._._._._. Terra arada!")
    if(this.conquista === true) {
        console.log("🦋 Conquista obtida")
    }
}

// Polimorfismo
minerar() {
    console.log("💣 dano atribuido" )
}


}

// Criação de objetos (mundo)
console.clear()
console.log("_  __ ___ _   _ _____ ____ ____     _    _____ _____")
console.log("|  \/  |_ _| \ | | ____/ ___|  _ \   / \  |  ___|_   _|")
console.log("| |\/| || ||  \| |  _|| |   | |_) | / _ \ | |_    | |  ")
console.log("| |  | || || |\  | |__| |___|  _ < / ___ \|  _|   | |  ")
console.log("|_|  |_|___|_| \_|_____\____|_| \_/_/   \_|_|     |_|  ")
console.log("")                                                     

// Criando um bloco de terra
// new (novo objeto) 
// Bloco (classe modelo(resistencia, textura))
const bloco1 = new Bloco(1,"terra")
bloco1.criarBloco()


// criando um bloco de madeira
const bloco2 = new Bloco(2,"madeira")
bloco2.criarBloco()
bloco2.construir()

// Criando um bloco de pedra 
const bloco3 = new Bloco(3,"pedra")
bloco3.criarBloco()
bloco3.minerar()

// Criando uma enxada de madeira
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

// Criando uma enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

// Criando uma Enxada de diamante
const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar