class ProdutoLoja {
    nome:string;
    preco:number;


    constructor(nome: string , preco:number) {

        this.nome = nome;
        this.preco = preco;
    }


}

class CarrinhoDeCompras{
    private produto: ProdutoLoja [] = [];
    

    constructor(){
        
    }

    adicionarProduto(produto: ProdutoLoja){

        this.produto.push(produto);
    }

    totalProdutos(){
        let soma = 0
        console.log("Produtos no Carrinho")
        for (let i = 0; i < this.produto.length; i++){
           soma = soma + this.produto[i].preco

        }
        console.log(soma)
    }

    remover(produto: ProdutoLoja){
        this.produto = this.produto.filter((item) => item.nome !== produto.nome);
    }

}

class Loja{
    private produtos: ProdutoLoja [] = [];
carrinho = new CarrinhoDeCompras()


constructor(){


}

adicionarEstoque(estoque: ProdutoLoja){
    this.produtos.push(estoque);
}

removerEstoque(produtos: ProdutoLoja){
    this.produtos = this.produtos.filter((item) => item.nome !== produtos.nome);
}


adicionarEstoqueDeCompras(estoque: ProdutoLoja){
    this.produtos.push(estoque);
}

removerCarrinho(carrinho: CarrinhoDeCompras){
    this.produtos = this.produtos.filter((item) => item.nome !== produtos.nome);
}



}


const produto1 = new ProdutoLoja("tenis", 500.00);
const produto2 = new ProdutoLoja("celular", 500.00);
const produto3 = new ProdutoLoja("fruta", 500.00);
const produto4 = new ProdutoLoja("biscoito", 500.00);

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1)
carrinho.adicionarProduto(produto2)
carrinho.adicionarProduto(produto3)
carrinho.adicionarProduto(produto4)
console.log(carrinho.totalProdutos());
console.log(carrinho.remover(produto1))
console.log(carrinho.totalProdutos());