var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (numero1 > numero2) {
  console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
  console.log("O maior número é: " + numero2);
} else {
  console.log("Os números são iguais.");
}
