function sum(num1, num2) {
    return num1+num2
}

function subtraction(num1, num2) {
    return num1-num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1/num2
}

function divisionRest(num1, num2) {
    return num1 % num2
}

function isEven(num1, num2) {
    let num3 = (num1 + num2) % 2
    if (num3 == 0) {
        return true
    }
    else {
        return false
    }
}

function equalNumbers(num1, num2) {
    if (num1 == num2) {
        return true
    }
    else {
        return false
    }
}

alert("Vamos calcular?")
let num1 = Number(prompt("Insira o primeiro número:"))
let num2 = Number(prompt("Insira o segundo número:"))
const soma = sum(num1, num2)
const sub = subtraction(num1, num2)
const mult = multiply(num1, num2)
const div = division(num1, num2)
const resto = divisionRest (num1, num2)
const par = isEven(num1, num2)
const iguais = equalNumbers(num1, num2)
alert("A soma dos números é " + soma)
alert("A subtração dos números é " + sub)
alert("A multiplicação dos números é " + mult)
alert("A divisão dos números é " + div)
alert("O resto da divisão dos números é " + resto)
if (par == true) {
    alert("A soma dos dois números é par.")
    
}
else {
    alert("A soma dos dois números é ímpar.")
}
if (iguais == true) {
    alert("Os dois números escolhidos são iguais.")
}
else {
    alert("Os dois números escolhidos são diferentes.")
}