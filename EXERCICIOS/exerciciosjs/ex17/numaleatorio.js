let mostrar = document.getElementsByClassName('div-p')[0]
function numaleatorio()
{
    let numaleatorio = Math.floor(Math.random() * 100)
    mostrar.innerHTML += `<p>Acabei de pensar no número <mark>${numaleatorio}</mark></p>`
}
function limpar()
{
    mostrar.innerHTML = null
}
