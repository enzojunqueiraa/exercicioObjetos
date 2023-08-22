class Macaco{
    nome: string;
    raca:  string;
    idade: number;

    constructor(nome: string, raca: string, idade: number){

        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    apresentar(){
        return "Oi, sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }

    apresentarPara(nome: string ){
        return " Olá " + nome + "," + " sou " + this.nome +  " um "  + this.raca + " de " + this.idade + " anos "
    }
}

let cako = new Macaco("cako", "Mandril", 20 );
let mamaco = new Macaco("mamaco","Langur-de-ouro", 12 );



console.log(cako.nome);
console.log(mamaco.nome);
console.log(cako.apresentar());
console.log(mamaco.apresentar());
console.log(cako.apresentarPara("Claudio"));
console.log(mamaco.apresentarPara("Enzo"));