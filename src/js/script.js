var nomeVinho = prompt("Digite o nome do vinho:");
alert("Nome cadastrado com sucesso! Veja os detalhes no console");
console.log("Nome do vinho: " + nomeVinho);

var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
alert("Tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
console.log("Tipo do vinho: " + tipoVinho);

var safraVinho = prompt("Digite o ano da safra do vinho:");
alert("Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console");
console.log("Ano da Safra: " + safraVinho);

var quantidadeEstoque = prompt("Digite a quantidade em estoque do vinho:");
if (quantidadeEstoque < 5){
  alert("Verificar o Console para classificação da quantidade de estoque");
  console.log("Quantidade de estoque: " + quantidadeEstoque);
  console.log("ESTOQUE BAIXO");
  alert("Quantidade cadastrada com sucesso!")
}
else{
  alert("Quantidade em estoque cadastrada com sucesso! Veja os detalhes no console.");
  console.log("Quantidade em estoque: " + quantidadeEstoque);
}



