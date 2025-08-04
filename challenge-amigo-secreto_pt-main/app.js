const nomes = [];

function adicionarAmigo(){
    const input = document.getElementById('amigo');
    const nome = input.ariaValueMax.trim()

    if (nome === ""){
        alert("Por favor, digite um nome válido.");
        return;
    }
    nomes.push(nome);
    atualizarLista();
    input.value="";
    input.focus();
}

function atualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    nomes.forEach(nome =>{
        const li = document.createElement('li');
        li.textcontent = nome;
        lista.appendChild(li);
    });   
}