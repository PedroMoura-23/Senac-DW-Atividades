let lista = [];
function cadastrar(){
lista.unshift(document.getElementById('nome').value)
console.log(lista)
}
function imprime(){
    for (var n in lista){
    resultado.innerHTML += `<p>${lista[n]}</p>`
}
}
function limpar(){
lista = [];
}