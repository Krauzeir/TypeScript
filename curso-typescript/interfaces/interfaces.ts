/* Interface seria algo próximo de um "contrato", no qual você declara quais os elementos que o objeto terá e sua tipagem */ 
interface Humano {
    nome: string
    idade?: number /* a '?' torna o elemento opcional */
    [prop: string]: any /* forma de associar a um elemento no qual não sabe o nome. O '[prop: string]' refere-se ao 'xuahshxuas' */
    saudar(sobrenome: string): void
}



/* '{ nome: string}', informa que no objeto pessoa é necessário que tenha o elemento 'nome' e que seja uma string */
function saudarComOla(pessoa: Humano) {
    console.log('Olá, ', pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

pessoa.saudar('Skywalker')

// saudarComOla({nome: 'Jonas'})
// saudarComOla({nome: 'Bruno', idade: 27, xuahshxuas: 'não sei o elemento' }) /* O elemento 'idade' não estando configurado na interface Humano dará erro */



// Usando Classes...

// Ao utilizar o 'implements' com uma interface, a classe precisa respeitar o contrato existente na interface criada para os elementos OBRIGATÓRIOS, mas podendo adicionar novos elementos, exemplo 'status'
class Cliente implements Humano {
    nome: string = ""
    status: boolean = true
    saudar(sobrenome: string) {
        console.log('Olá, meu nome era ' + this.nome + ' ' + sobrenome + ' e isso é: ' + this.status)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Lucas'
meuCliente.saudar('Salvador')


// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    // Math.pow(3, 10)
    // 3 ** 10
    return Math.pow(base,exp)
}

console.log(potencia(3, 10))