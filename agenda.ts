class Evento{
    nome: string;
    data: string;
    horario: string;

    constructor(nome:string, data: string, horario:string) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }


}


class Agenda{
    private evento: Evento[] = [];


    constructor(){

    }


    adicionarEvento(evento: Evento){

        this.evento.push(evento);

    }

    visualizar(){
        
        console.log("Eventos Disponíveis")
        for (let i = 0; i < this.evento.length; i++){
            console.log(this.evento[i].nome + " na data " + this.evento[i].data + " as " + this.evento[i].horario);
        }

    }


    remover(evento: Evento){
        this.evento = this.evento.filter((item) => item.nome !== evento.nome);
    }


}

const evento1 = new Evento(" Halloween do Vini ", "20/09","20h" );
const evento2= new Evento(" Farofa do Davi", "21/09","21h" );
const evento3 = new Evento(" Higor Cristo Fest ", "22/09","22h" );

const minhaAgenda = new Agenda();
minhaAgenda.adicionarEvento(evento1)
minhaAgenda.adicionarEvento(evento2)
minhaAgenda.adicionarEvento(evento3)
console.log(minhaAgenda.visualizar());
console.log(minhaAgenda.remover(evento1));


