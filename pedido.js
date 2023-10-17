"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Aguardando"] = " Aguardando Envio ";
    StatusPedido["Preparo"] = "Em Preparo";
    StatusPedido["Saiu"] = "Saiu para Entrega";
    StatusPedido["Entregue"] = "Produto Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.Aguardando;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Podrutu adissionado com suscseço!!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        console.log("Status do Produto:" + this.status);
    }
    visualizar() {
        for (let i = 0; i < this.produtos.length; i++)
            console.log("O " + this.produtos[i].nome + "tem o Preço de " + this.produtos[i].valor);
    }
}
const produtos = new Pedido();
const pedido = new ProdutoPedido("Selulair ", 1000);
console.log(produtos.adicionarProduto(pedido));
(produtos.visualizar());
(produtos.exibirStatus());
(produtos.atualizarStatus(StatusPedido.Preparo));
(produtos.exibirStatus());
const pedido2 = new ProdutoPedido("Notibuk ", 10000);
console.log(produtos.adicionarProduto(pedido2));
(produtos.visualizar());
(produtos.exibirStatus());
(produtos.atualizarStatus(StatusPedido.Saiu));
(produtos.exibirStatus());
