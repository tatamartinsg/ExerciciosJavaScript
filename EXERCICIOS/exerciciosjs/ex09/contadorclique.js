let contador = 0
let mostrar = window.document.getElementsByClassName('div-p')[0]

function contadorclique()
{
    // var contador = Number
    contador++
    mostrar.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques</p>`
}
function zerarcontador()
{
    contador = 0
    mostrar.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques</p>`
}