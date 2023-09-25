var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
var numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

var numeros = [numero1, numero2, numero3];

numeros.sort(function(a, b) {
  return a - b;
});

console.log("Os números em ordem crescente são: " + numeros.join(", "));