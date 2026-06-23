function cadastrar(){
    let nome = document.getElementById('nome');
    let lista = document.getElementById('lista');
    lista.innerHTML += `${nome.value}<br>`;
    nome.value = ''
    nome.focus()
}