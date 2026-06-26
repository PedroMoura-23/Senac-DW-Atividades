/* Array - Listas */

let lista = [] /* lista vazia */
let idade = [2,5,9,10,15]
let nomes = ['Jaderson','Pedro','Thiago','João']

console.log(lista)
console.log(idade[2])
console.log(nomes[3])

console.log(`O tamanho da Lista é ${nomes.length}`)

for (var cont = 0; cont <= 3; cont++){
    console.log(`Usuário - ${nomes[cont]}`)
}

for (var n in nomes){
    console.log(`Usuário - ${nomes[n]}`)
}

lista.unshift(51)//Adiciona um valor no ínicio do Array / Lista;
console.log(lista)
lista.push(67)//Adiciona um valor no final da Lista
lista.pop()//Remove o último elemento da lista
lista.shift()//Remove o primeiro elemento da lista
lista.sort()//Classifica em ordem crescente
lista.reverse()//Classifica em ordem decrescente
lista.splice(0,1, 'Jaderson', 'Jefferson')
console.log(lista)