function soma(){
    let num1 = Number(document.getElementById('Anum1').value);
    let num2 = Number(document.getElementById('Anum2').value);
    let add = num1 + num2;
    Resultado1.innerHTML = `A soma dos números ${num1} e ${num2} é ${add}.`
}
function subtrai(){
    let num1 = Number(document.getElementById('Snum1').value);
    let num2 = Number(document.getElementById('Snum2').value);
    let sub = num1 - num2;
    Resultado2.innerHTML = `A subtração dos números ${num1} e ${num2} é ${sub}.`
}