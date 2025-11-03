let totalFinal = 0;
limpar();

function adicionar() {
    //aqui preciso: recuperar os valores de Nome do Produto, Quantidade e Valor    
    let produto = document.getElementById('produto').value;
    let qtde = document.getElementById('quantidade').value;

        if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        limpar();
        return;
    }

    if (isNaN(qtde) || qtde <= 0) {
        alert("Insira uma quantidade válida.");
        limpar();
        return;
    }

    //split : vai separar o coiso | dentro do parametro vai botar o que vai separar
    let nomeProduto = produto.split('-')[0]; //Split é uma função do JavaScript que divide um texto com base no caractere passado como delimitador, retornando um array. Sendo assim, o tamanho do array dependerá de quantas vezes esse caractere aparece.
    let valorUnitario = produto.split('R$')[1];

    // calcular o preço, o subtotal
    let precoSubtotal = valorUnitario * qtde;
    // Adicionar o produto no carrinho o produto escolhido 
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtde}x</span> ${nomeProduto} <span class="texto-azul">R$${precoSubtotal}</span>
        </section>`

    // Atualizar o valor total da compra
    totalFinal = totalFinal + precoSubtotal;
    
    let campoTotal = document.getElementById('valor-total');
    
    campoTotal.textContent = `R$ ${totalFinal}`

    document.getElementById('quantidade').value = 0;


}

function limpar() {
    totalFinal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

    
}

