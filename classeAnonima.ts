const pessoa = new class {
    private primeiroNome = "José";
    private ultimoNome = "da Silva";
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
}


console.log(pessoa.getNomeCompleto());

const pessoa10 =  {
     primeiroNome1:  "José",
     ultimoNome1: "da Silva",
    getNomeCompleto: function(){
        return this.primeiroNome1 + " " + this.ultimoNome1

    }
}
console.log(pessoa10.getNomeCompleto());

const treinadorPessoal = new class{
    private rotina: {nome: string, duracao: number}[] = [];

    adicionarExercicios(nome:string, duracao:number): void{
        this.rotina.push({nome, duracao});
    }

    calcularTempoTotal():number{
        // declarando variavel para somar as durações
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return soma;
    }
}

treinadorPessoal.adicionarExercicios("Corrida", 30)
treinadorPessoal.adicionarExercicios("Flexões", 15)
treinadorPessoal.adicionarExercicios("Agachamentos", 20)
console.log("Tempo total necessário para a rotina:" + treinadorPessoal.calcularTempoTotal()+ " em minutos ");