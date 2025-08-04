const nomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
}
