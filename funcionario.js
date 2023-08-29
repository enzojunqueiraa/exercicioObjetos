"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.inss = 11;
        this.ir = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    totalImpostos() {
        let desconto = ((this.salario * this.inss) / 100);
        let salarioAtualizado = (this.salario - desconto);
        return " Valor de impostos a serem descontados " + (desconto + ((salarioAtualizado * this.ir) / 100));
    }
    aplicarAumento(percentual) {
        let aumento = ((this.salario * percentual) / 100);
        this.salario = this.salario + aumento;
        return " Aumento de " + percentual + "%." + " Novo Salário: " + this.salario;
    }
    exibirDetalheFuncionario() {
        let desconto = ((this.salario * this.inss) / 100);
        let salarioAtualizado = this.salario - desconto;
        let impostos = (desconto + (salarioAtualizado * this.ir) / 100);
        let salarioLiquido = this.salario - impostos;
        return " Funcionário da XPTO:" + this.nome + ", " + " Salário Bruto:" + this.salario + " Impostos a serem pagos: " +
            impostos + " Salário Líquido: " + salarioLiquido;
    }
}
let funcionario = new Funcionario(" Ana Silva ", "Analista de Vendas", 3000);
console.log(funcionario.totalImpostos());
console.log(funcionario.exibirDetalheFuncionario());
console.log(funcionario.aplicarAumento(10));
console.log(funcionario.exibirDetalheFuncionario());
let funcionario2 = new Funcionario(" Alex ", "Analista de Vendas", 200000);
console.log(funcionario2.totalImpostos());
console.log(funcionario2.exibirDetalheFuncionario());
console.log(funcionario2.aplicarAumento(50));
console.log(funcionario2.exibirDetalheFuncionario());
let funcionario3 = new Funcionario(" Claudio ", "Analista de Vendas", 200001);
console.log(funcionario3.totalImpostos());
console.log(funcionario3.exibirDetalheFuncionario());
console.log(funcionario3.aplicarAumento(50));
console.log(funcionario3.exibirDetalheFuncionario());
