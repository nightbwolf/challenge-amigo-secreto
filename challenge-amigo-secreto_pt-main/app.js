const nomes = [];

function adicionarAmigo(){
    const input = document.getElementById('amigo');
    const nome = input.ariaValueMax.trim()

    if (nome === ""){
        alert("Por favor, digite um nome válido.");
    }
}
