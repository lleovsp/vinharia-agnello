var nome = prompt("Digite o nome do vinho:");
if (nome === null || nome === "" || nome === " ") {
	alert("digite um valor não vazio para o vinho");
	nome = prompt("Digite o nome do vinho");
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
} else {
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
}
console.log(`Nome do vinho: ${nome}`);

var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
if (tipoVinho != "tinto" || tipoVinho != "branco" || tipoVinho != "rosé") {
	alert(`${tipoVinho} não é uma das opcões de vinho`);
	tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
	alert("Tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
} 
else {
	alert("tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
}
console.log(`Tipo do vinho: ${tipoVinho}`);

var safraVinho = prompt("Digite o ano da safra do vinho:");
if (safraVinho === null || safraVinho === "" || safraVinho === " ") {
	alert("Digite um valor não vazio para o ano");
	safraVinho = prompt("Digite o ano da safra do vinho:");
	alert("ano da safra cadastrado com sucesso! Veja os detalhes no console");
} else {
	alert("Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console");
}

// verificação do ano da safra
if (safraVinho >= 2020){
	console.log("Classificação: Vinho jovem")
} else if (safraVinho >= 2015 && safraVinho <= 2019){
	console.log("Classificação: Vinho amadurecido")
} else if (safraVinho < 2015){
	console.log("Classificação: Vinho antigo")
}

var qntdEstoque = prompt("Digite a quantidade em estoque do vinho:");
//validação de entrada de dados
if (
	qntdEstoque === null ||
	qntdEstoque === "" ||
	qntdEstoque === " "
) {
	alert("Digite um valor não vazio para a quantidade de estoque");
	qntdEstoque = prompt("Digite o estoque do vinho:");
	alert("Quantidade cadastrada com sucesso!");
} else {
	alert("Quantidade cadastrada com sucesso! Verificar o Console para classificação e detalhes da quantidade de estoque");
}
console.log(`Quantidade em estoque: ${qntdEstoque}`);

// verificação de estoque
if (parseInt(qntdEstoque) < 5) {
	console.log("Estoque baixo, favor verificar");
}

alert("Todas informações estão exibidas no console")
