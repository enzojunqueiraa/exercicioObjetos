class Estudante{
    nome: string ;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number, notas: number[]){
        
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;

    }

    media(){
        let soma = 0
        let media = 0
        for(let i=0; i < this.notas.length; i++){
           
       soma += this.notas[i];
       media = soma/this.notas.length
        }

        let msgAprovação = " Parabéns " + this.nome + "," + " sua média é " + soma/(this.notas.length) + ","  + " você está aprovado. " ;

        if(media < 7 ){

            msgAprovação = "  Você está reprovado, precisa estudar mais para melhorar seu desempenho. ";
        }
        return msgAprovação
           

    }
}

let estudante = new Estudante("Maria", 20 , [8 , 7.5 , 9.2 , 10 , 9.5]);

    console.log(estudante.media());
    