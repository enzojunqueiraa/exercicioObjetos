"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produto = [];
    }
    adicionarProduto(produto) {
        this.produto.push(produto);
    }
    totalProdutos() {
        let soma = 0;
        console.log("Produtos no Carrinho");
        for (let i = 0; i < this.produto.length; i++) {
            soma = soma + this.produto[i].preco;
        }
        console.log(soma);
    }
    remover(produto) {
        this.produto = this.produto.filter((item) => item.nome !== produto.nome);
    }
}
class Loja {
    constructor() {
        this.produtos = [];
        this.carrinho = new CarrinhoDeCompras();
    }
    adicionarEstoque(estoque) {
        this.produtos.push(estoque);
    }
    removerEstoque(produtos) {
        this.produtos = this.produtos.filter((item) => item.nome !== produtos.nome);
    }
    adicionarEstoqueDeCompras(estoque) {
        this.produtos.push(estoque);
    }
    removerCarrinho(carrinho) {
        this.produtos = this.produtos.filter((item) => item.nome !== produtos.nome);
    }
}
const produto1 = new ProdutoLoja("tenis", 500.00);
const produto2 = new ProdutoLoja("celular", 500.00);
const produto3 = new ProdutoLoja("fruta", 500.00);
const produto4 = new ProdutoLoja("biscoito", 500.00);
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);
carrinho.adicionarProduto(produto4);
console.log(carrinho.totalProdutos());
console.log(carrinho.remover(produto1));
console.log(carrinho.totalProdutos());
