const container = document.getElementById("conteudoCatalogo");
const campoBusca = document.getElementById("campoBusca");

function exibirProdutos(lista) {
    container.innerHTML = "";
    lista.forEach(produto => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto[4]}" alt="${produto[0]}">
            <h3>${produto[0]}</h3>
            <p class="categoria">${produto[2]}</p>
            <p class="descricao">${produto[1]}</p>
            <p class="preco">R$ ${Number(produto[3]).toFixed(2)}</p>
        `;
        container.appendChild(card);
    });
}

function filtrarProdutos() {
    const texto = campoBusca.value.toLowerCase();
    const filtrados = produtos.filter(produtos =>
        produtos[0].toLowerCase().includes(texto) ||
        produtos[1].toLowerCase().includes(texto) ||
        produtos[2].toLowerCase().includes(texto)
    );
    exibirProdutos(filtrados);
}

campoBusca.addEventListener("input", filtrarProdutos);
exibirProdutos(produtos);