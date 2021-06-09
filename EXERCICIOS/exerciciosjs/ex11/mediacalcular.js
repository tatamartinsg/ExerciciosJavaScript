function mediacalcular(){
    let nome = window.prompt('Qual seu nome?')
    let nota1 = Number(window.prompt(`Olá, ${nome}, qual foi sua primeira nota?`))
    let nota2 = Number(window.prompt(`${nome}, além de ${nota1}, qual foi a sua outra nota?`))
    let media = (nota1+nota2)/2
    let mostrar = window.document.getElementsByClassName('div-p')[0]
    mostrar.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>`
    mostrar.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    mostrar.innerHTML += `<p>A média final será de <mark>${media}</mark></p>`
    if (media>=6){
        mostrar.innerHTML += `<p>A mensagem que temos é:<strong style='color:red;'> Meus parabéns!</strong></p>`
    }
    else{
        mostrar.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'> Estude um pouco mais!</strong></p>`
    }
}