// 1 - Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
const numero = prompt("Digite o valor aqui: ");
const numeroDobro = numero*2;
alert (numeroDobro)


// 2 - Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.
const valorDoJantar = parseInt (prompt("Digite o valor do Jantar: "));
const taxaJantar = parseInt (prompt ("Digite o valor da taxa: "));
const valDoJantETax = parseInt(valorDoJantar * (taxaJantar/100));
const valorFinal = valDoJantETax + valorDoJantar;
alert (valorFinal)


// 3 - Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

const valorTotal = parseInt(prompt("Digite o Valor Total: "));
const qtdPessoas = prompt("Pessoas para Dividir a conta ?(S/N): ");
let qtdPessoasDiv;
if (qtdPessoas === "S" || qtdPessoas === "s") {
    const qtdPessoasValor = parseInt(prompt("Quantas pessoas irão dividir a conta ?: "));
    qtdPessoasDiv = parseInt(valorTotal / qtdPessoasValor);
    alert("O valor por pessoa ficará em: " + qtdPessoasDiv);
} else {
    alert ('O valor total a se pagar será: ' + valorTotal)
}
