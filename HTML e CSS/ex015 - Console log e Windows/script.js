/* window.alert('Óla Mundo!') */
/* console.log('Óla Mundo! - Console Log') */
let nome = window.prompt(`Digite seu nome`)
let pg = document.getElementById('texto')
console.log(pg)
pg.innerHTML = `Olá Mundo! Receba o(a) ${nome} como novo(a) jogador(a)!`

pg.style.color = `red`
