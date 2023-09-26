"use strict";
class ContaBancaria2 {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria2 {
    constructor(limiteChequeEspecial) {
        super("193219", 100, "EnzoJunqueira");
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        if (this.limiteChequeEspecial != 0) {
            this.saldo = this.saldo + valor;
        }
        else {
            this.saldo = (this.saldo + this.limiteChequeEspecial) + valor;
        }
        console.log("O saldo após o depósito é de " + this.saldo);
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
        if (this.saldo + this.limiteChequeEspecial >= valor) {
            console.log("O novo valor após o saque é " + this.saldo);
        }
        else {
            console.log("O saldo é insuficiente");
        }
    }
    consultarSaldo() {
        console.log("O saldo atual é de " + (this.saldo + this.limiteChequeEspecial));
        return this.saldo + this.limiteChequeEspecial;
    }
}
const contaCorrente = new ContaCorrente(100);
contaCorrente.depositar(100);
