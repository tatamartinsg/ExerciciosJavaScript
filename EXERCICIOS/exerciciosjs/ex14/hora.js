function hora()
{
    let hora = new Date
    let mostrar = window.document.getElementsByClassName('div-p')[0]
    mostrar.innerHTML = `<p>O que eu recebi do sistema foi <mark>${hora}</mark></p>`
}