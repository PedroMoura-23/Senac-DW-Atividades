function calcular(){
    resultado.innerHTML = ''
    let num = Number(document.getElementById('numero').value)
    let i = 0 
    resultado.innerHTML = `Tabuada de <strong>${num}</strong><br>`
    do{
    resultado.innerHTML += `${num} x ${i} = <strong>${i * num}</strong><br>`
    i++
} while (i<=10)
}