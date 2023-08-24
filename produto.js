"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    descrever() {
        return " O produto " + this.nome + " custa R$ " + this.preco + ".";
    }
    descontoPara(porcentagem) {
        return " O produto " + this.nome + " custa R$ " + (this.preco - ((this.preco * porcentagem) / 100)) + " com desconto. ";
    }
}
let celular = new Produto("Celular", 11000.00);
let notebook = new Produto("Notebook", 6000.00);
let mouse = new Produto("Mouse", 750.00);
console.log(celular.descrever());
console.log(celular.descontoPara(10));
console.log(notebook.descrever());
console.log(notebook.descontoPara(10));
console.log(mouse.descrever());
console.log(mouse.descontoPara(10));
