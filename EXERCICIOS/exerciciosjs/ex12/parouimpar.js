function parouimpar()
{
    let numero = Number(window.prompt("Digite um número"))
    let mostrar = window.document.getElementsByClassName('div-p')[0]
    if(numero % 2 == 0)
    {
        mostrar.innerHTML = `<p>O número ${numero} que foi digitado é <strong>PAR!<strong></p>`
    }
    else
    {
        mostrar.innerHTML = `<p>O número ${numero} que foi digitado é <strong>ÍMPAR!<strong></p>`
    }
}