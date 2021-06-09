// window.alert("Olá, seja bem vinde!")
function calcular ()
{
    var num = window.prompt("Digite um numero: ")
    var resultado = window.document.getElementsByClassName('pp')[0]
    resultado.innerHTML = `<p>O dobro de ${num} é ${num*2} e a metade é ${num/2}! </p>`

}