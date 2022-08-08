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

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

// saudarComOla({nome: 'Jonas'})
// saudarComOla({nome: 'Bruno', idade: 27, xuahshxuas: 'não sei o elemento' }) /* O elemento 'idade' não estando configurado na interface Humano dará erro */
