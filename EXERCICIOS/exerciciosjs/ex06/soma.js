function soma()
{
    var num1 = window.prompt("Numero 1 = ")
    var num2 = window.prompt("Numero 2 = ")
    var soma = Number(num1) + Number(num2)
    var resultado = window.document.getElementsByClassName('div-p')[0]
    resultado.innerHTML = `<p>A soma de <mark>${num1} </mark> + <mark>${num2}</mark> é igual a <strong>${soma}</strong></p>`
}