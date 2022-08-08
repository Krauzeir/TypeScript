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
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Jonas'})
// saudarComOla({nome: 'Bruno', idade: 27, xuahshxuas: 'não sei o elemento' }) /* O elemento 'idade' não estando configurado na interface Humano dará erro */
