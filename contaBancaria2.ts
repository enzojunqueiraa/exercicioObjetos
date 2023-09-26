abstract class ContaBancaria2{
    numeroConta: string;
    saldo: number;
    titular: string;


    constructor(numeroConta: string, saldo: number, titular: string){

        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;

    }

    abstract depositar(valor:number): void;

    abstract sacar(valor:number): void;

    abstract consultarSaldo(): number;

}
 
class ContaCorrente extends ContaBancaria2{
    constructor(protected limiteChequeEspecial:number){
        super("193219", 100, "EnzoJunqueira")
        
    }

    depositar(valor: number): void {
       if(this.limiteChequeEspecial != 0){
        this.saldo = this.saldo+valor

       } else {
        this.saldo = (this.saldo+this.limiteChequeEspecial)+valor
       }

       console.log("O saldo após o depósito é de " + this.saldo)

    }

    sacar(valor:number): void {
        this.saldo = this.saldo - valor
        if(this.saldo + this.limiteChequeEspecial >= valor){
            console.log("O novo valor após o saque é " + this.saldo)
        } else{
            console.log("O saldo é insuficiente")
        }

        }

        consultarSaldo(): number {
            console.log("O saldo atual é de " + (this.saldo+this.limiteChequeEspecial))
            return this.saldo+this.limiteChequeEspecial
        }

    }


const contaCorrente = new ContaCorrente(100);
contaCorrente.depositar(100);






