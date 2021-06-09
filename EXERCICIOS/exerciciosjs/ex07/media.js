function media()
{
    var nome = window.prompt("Qual é o seu nome?")
    var nota1 = window.prompt("Qual foi sua primeira nota?")
    var nota2 = window.prompt("Qual foi sua segunda nota?")
    var apnome = window.document.getElementsByClassName('div-p')[0]
    let media = (Number(nota1)+Number(nota2))/2
    apnome.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>
    <p>As notas obtidas foram de <mark>${nota1}</mark> e <mark>${nota2}</mark></p>
    <p>A média final será de <mark>${media}</mark></p>`
}