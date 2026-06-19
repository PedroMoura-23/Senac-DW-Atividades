function cadastro() {
    event.preventDefault()
    /* let p_nome = document.getElementById('p_nome'); */
    let pnome = document.getElementById('p_nome').value;
    let resultado = document.getElementById('resultado');
    window.alert(`${pnome} seu cadrasto foi realzado com sucesso!`);
    resultado.innerHTML = `<p>Sr. ${pnome}, seu cadastro foi realizado com sucesso!</p>`
    resultado.style.backgroundColor = 'red'   
}