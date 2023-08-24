class Pessoa{
    nome: string ;
    idade: number;
    comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]){
        
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;

    }

    cumprimentar(){
        let msgHabilitação = " já posso tirar minha CNH ";
        if(this.idade <= 18 ){
            msgHabilitação = " Não posso tirar minha CNH ";
        }
        return " Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos " + msgHabilitação + "."
           
    }

    comidasFavoritas(){

        console.log("Minhas(s) comidas(s) favoritas(s)");
        for(let i=0; i < this.comidas.length; i++)
        console.log(this.comidas[i]);

    }




}

let claudio = new Pessoa("Claudio", 20 , ["Churrasco","Strognoff de Frango","Velene","Risoto"]);

    console.log(claudio.cumprimentar());
    console.log(claudio.comidasFavoritas());