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
    adicionarProduto(produtoAdicionar) {
        this.produto.push(produtoAdicionar);
        return "Produto adicionado";
    }
    excluirProduto(produto) {
        this.produto = this.produto.filter((item) => item.nome !== produto.nome);
    }
    calcularTotal() {
        let soma = 0;
        for (let i = 0; i < this.produto.length; i++) {
            soma = soma + this.produto[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do Carrinho: ");
        for (let i = 0; i < this.produto.length; i++) {
            console.log("Produto:" + this.produto[i].nome + "R$" + this.produto[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtoDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras;
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtoDoEstoque.push(produto);
        return "Produto adicionado ao estoque";
    }
    removerProdutoDoEstoque(produto) {
        this.produtoDoEstoque = this.produtoDoEstoque.filter((item) => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtoDoEstoque.find(item => item.nome === produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado ao estoque da loja";
        }
    }
    removerProdutosDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto);
    }
    exibirProdutosCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
//Criando Produtos
const produtoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const produtoLoja2 = new ProdutoLoja("Shorts", 49.99);
const produtoLoja3 = new ProdutoLoja("Calça", 189.99);
const produtoLoja4 = new ProdutoLoja("Sapato", 329.99);
//Criando a Loja
const minhaLoja = new Loja();
//Adicioando Produto ao Estoque
minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja4);
//Adicioando Produto ao Estoque
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);
//Remover Produto ao Carrinho de Compra
minhaLoja.removerProdutosDoCarrinho(produtoLoja4);
//Remover Produto do Estoque da Loja
minhaLoja.removerProdutoDoEstoque(produtoLoja4);
//Exibindo produtos do Carrinho de Compra
minhaLoja.exibirProdutosCarrinho();
//Exibindo valor total do carrinho
console.log("Total de carrinho de compras: R$" + minhaLoja.carrinhoDeCompra.calcularTotal());
