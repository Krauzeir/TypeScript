"use strict";
/* '{ nome: string}', informa que no objeto pessoa é necessário que tenha o elemento 'nome' e que seja uma string */
function saudarComOla(pessoa) {
    console.log('Olá, ', pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');
// saudarComOla({nome: 'Jonas'})
// saudarComOla({nome: 'Bruno', idade: 27, xuahshxuas: 'não sei o elemento' }) /* O elemento 'idade' não estando configurado na interface Humano dará erro */
// Usando Classes...
// Ao utilizar o 'implements' com uma interface, a classe precisa respeitar o contrato existente na interface criada para os elementos OBRIGATÓRIOS, mas podendo adicionar novos elementos, exemplo 'status'
class Cliente {
    constructor() {
        this.nome = "";
        this.status = true;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome era ' + this.nome + ' ' + sobrenome + ' e isso é: ' + this.status);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Lucas';
meuCliente.saudar('Salvador');
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
