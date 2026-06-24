let x = 2;
let y = 5;
var resultado = x + y;
console.log(`A soma de x e y é ${resultado}`)
var resultado = x - y;
console.log(`A subtração de x e y é ${resultado}`)
var resultado = x / y;
console.log(`A divisão de x e y é ${resultado}`)
var resultado = x * y;
console.log(`A multiplicação de x e y é ${resultado}`)
var resultado = y % x;
console.log(`A o resto de x e y é ${resultado}`)

var num1 = Number(window.prompt('Digite um número:'));
var num2 = Number(window.prompt('Digite outro número:'));
var num3 = Number(window.prompt('Digite outro número:'));
var num4 = Number(window.prompt('Digite outro número:'));

var soma = num1 + num2 + num3 + num4;
if(soma == 67){
    window.alert(`Aí é muito fácil professora, é SIX SEVEN`)
} else {
    window.alert(`A soma dos números é: ${soma}`)
}
