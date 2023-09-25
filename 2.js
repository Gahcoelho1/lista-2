var nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
var nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));
var nota3 = parseFloat(prompt("Digite a nota da terceira prova:"));

var peso1 = 4;
var peso2 = 3;
var peso3 = 3;

var mediaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

if (mediaFinal >= 7) {
  console.log("APROVADO");
} else if (mediaFinal >= 5) {
  console.log("RECUPERAÇÃO");
} else {
  console.log("REPROVADO");
}

console.log("Média Final: " + mediaFinal.toFixed(2));
