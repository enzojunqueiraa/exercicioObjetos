abstract class Funcionario2{
     protected nome: string;
     protected salario: number;



    constructor(nome:string, salario:number){
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;

    salarioMensal(): void {
        console.log("O salário do " + this.nome + " é " + this.salario)
    }

}

class Gerente extends Funcionario2{
    constructor(){
        super("Gerente", 1000);
    }

    calcularSalarioMensal(): number {
        let aumento;
        aumento = (this.salario * 10)/100
        let total
        total = this.salario + aumento
        return total
            }
}

class Desenvolvedor extends Funcionario2{

    constructor(){
        super("Desenvolvedor", 1000)
    }
        calcularSalarioMensal(): number {
            console.log("O salário do " + this.nome + " é " + this.salario)
            return this.salario
        }
    }



const gerente = new Gerente ();
gerente.salarioMensal();
console.log("Esse é o meu novo salário " + gerente.calcularSalarioMensal());

const desenvolvedor = new Desenvolvedor();
desenvolvedor.calcularSalarioMensal();


