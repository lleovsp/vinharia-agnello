var nome = prompt("Digite o nome do vinho:");
if (nome === null || nome === "" || nome === " ") {
	alert("digite um valor não vazio para o vinho");
	nome = prompt("Digite o nome do vinho");
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
} else {
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
}

var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
if (tipoVinho != "tinto" || tipoVinho != "branco" || tipoVinho != "rosé") {
	alert(`${tipoVinho} não é uma das opcões de vinho`);
	tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
	alert("Tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
} 
else {
	alert("tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
}

var safraVinho = prompt("Digite o ano da safra do vinho:");
if (safraVinho === null || safraVinho === "" || safraVinho === " ") {
	alert("Digite um valor não vazio para o ano");
	safraVinho = prompt("Digite o ano da safra do vinho:");
	alert("ano da safra cadastrado com sucesso! Veja os detalhes no console");
} else {
	alert("Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console");
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

// verificação de estoque
if (parseInt(qntdEstoque) < 5) {
	alert("Estoque baixo, favor verificar");
}
