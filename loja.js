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
        this.estoque = [];
        this.carrinho = new CarrinhoDeCompras();
    }
    adicionarEstoque(estoque) {
        this.estoque.push(estoque);
        return "Produto adicionado no estoque";
    }
    removerEstoque(produtos) {
        this.estoque = this.estoque.filter((item) => item.nome !== produtos.nome);
        return "Produto removido do estoque da loja";
    }
    adicionarEstoqueDeCompras(produto) {
        const produtoEncontrado = this.estoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerEstoqueCarrinho(produto) {
        return this.carrinho.remover(produto);
    }
    exibirProdutosCarrinho() {
        if (this.estoque.length > 0) {
            for (let i = 0; i < this.estoque.length; i++) {
                console.log(" Produto " + this.estoque[i].nome + " Preço: " + this.estoque[i].preco.toFixed((2)));
            }
        }
    }
    exibirTotalCarrinho() {
        return this.carrinho.totalProdutos();
    }
}
const produto1 = new ProdutoLoja("tenis", 500.00);
const produto2 = new ProdutoLoja("celular", 500.00);
const produto3 = new ProdutoLoja("fruta", 500.00);
const produto4 = new ProdutoLoja("biscoito", 500.00);
const produto5 = new ProdutoLoja("teclado", 500.00);
const loja = new Loja();
console.log(loja.adicionarEstoque(produto1));
console.log(loja.adicionarEstoque(produto2));
console.log(loja.adicionarEstoque(produto3));
console.log(loja.adicionarEstoque(produto4));
console.log(loja.adicionarEstoqueDeCompras(produto1));
console.log(loja.adicionarEstoqueDeCompras(produto2));
console.log(loja.adicionarEstoqueDeCompras(produto3));
console.log(loja.adicionarEstoqueDeCompras(produto4));
console.log(loja.adicionarEstoqueDeCompras(produto5));
console.log(loja.exibirProdutosCarrinho());
console.log(loja.exibirTotalCarrinho());
console.log(loja.removerEstoqueCarrinho(produto4));
console.log(loja.removerEstoque(produto4));
console.log(loja.exibirProdutosCarrinho());
console.log(loja.exibirTotalCarrinho());
