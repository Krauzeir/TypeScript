"use strict";
// String
let nome = 'João';
console.log(nome);
// nome = 28  /* Ocorrerá erro, já que 'nome' é tipado como string devido ao valor 'João' iniciado anteriormente */
// Numbers
let idade = 27;
// idade = 'Ana' /* Ocorrerá erro, já que 'idade' é tipado como number devido ao valor 27 iniciado anteriormente */
idade = 27.5; /* Typescript não diferencia as tipagens Float/Int/Etc, é tudo Number */
console.log(idade);
// Boolean
let Hobbies = false;
Hobbies = 1; /* Embora seja considerado um erro, ele continua executando e alterando valor */
console.log(Hobbies);
// Tipos Explícitos
let minhaIdade; /* Iniciando a variável sem nenhum valor, é possível manipular seu tipo, diferente dos exemplos acima*/
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "Tenho 27 anos";
console.log(typeof minhaIdade);
// Para iniciar uma variável sem nenhum valor, mas limitando sua tipagem, basta declarar da seguinte forma:
let Idade;
let Idade1;
// Array
let hobbies = ["Cozinhar", "Pratcar Esportes"];
console.log(hobbies);
hobbies = [100, 200];
console.log(hobbies);
// Tupla, Array com quantidade de tipagem predefinidas
let endereco = ["Av Principal", 99];
console.log(endereco);
// Enums, Estrutura que define valores pré-definidos
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["Domingo"] = 0] = "Domingo";
    diasDaSemana[diasDaSemana["Segunda"] = 100] = "Segunda";
    diasDaSemana[diasDaSemana["Terca"] = 101] = "Terca";
    diasDaSemana[diasDaSemana["Quarta"] = 10] = "Quarta";
    diasDaSemana[diasDaSemana["Quinta"] = 11] = "Quinta";
    diasDaSemana[diasDaSemana["Sexta"] = 12] = "Sexta"; // 12
})(diasDaSemana || (diasDaSemana = {}));
let meuDia = diasDaSemana.Terca;
console.log(meuDia);
// Tipagem Any (Não é o ideal, evite o uso do any)
let carro = 'BMW';
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
