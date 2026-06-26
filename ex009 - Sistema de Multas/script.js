function verificar(){
    let num = Number(document.getElementById('num1').value)
    if(num <= 50){
        resultado.innerHTML = `<p>Sua velocidade atual é <strong>${num}</strong> Km/h</p><p>Velocidade dentro do limite permitido</p><p>Use sempre cinto de segurança</p>`
    } else {
        resultado.innerHTML = `<p>Sua velocidade atual é <strong>${num}</strong> Km/h</p><p>Velocidade acima do limite permitido</p><p>Você será <strong><span id = 'multa'>MULTADO</span></strong > por excesso de velocidade</p><p>Use sempre o cinto de segurança, mas diminua sua velocidade</p>`
    }
let multa = document.getElementById('multa').style.color = 'red';
}
