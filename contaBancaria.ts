class ContaBancaria{
    nome: string ;
    private saldo: number;

    constructor(nome: string, saldo: number){
        
        this.nome = nome;
        this.saldo = saldo;

    }

    depositar(deposito: number){
        this.saldo = this.saldo+deposito
        return " E meu novo saldo é R$"  + this.saldo + " após o depósito feito. "
           
    }


    consultar(){

        return " Meu nome é " + this.nome + " e eu tenho R$" + this.saldo + "."
    }

    sacar(sacar: number){
        this.saldo = this.saldo-sacar;

        return "O novo saldo será de R$" + this.saldo + " após o saque feito. "

    }



}

let minhaConta = new ContaBancaria("João", 1000);



    console.log(minhaConta.consultar());
    console.log(minhaConta.depositar(500));
    console.log(minhaConta.consultar());
    console.log(minhaConta.sacar(200));
    console.log(minhaConta.consultar());


let minhaConta2 = new ContaBancaria("Enzo", 1000000000);



    console.log(minhaConta.consultar());
    console.log(minhaConta.depositar(500));
    console.log(minhaConta.consultar());
    console.log(minhaConta.sacar(200));
    console.log(minhaConta.consultar());

    let minhaConta3 = new ContaBancaria("Jaime", 10000);



    console.log(minhaConta.consultar());
    console.log(minhaConta.depositar(500));
    console.log(minhaConta.consultar());
    console.log(minhaConta.sacar(200));
    console.log(minhaConta.consultar());

    