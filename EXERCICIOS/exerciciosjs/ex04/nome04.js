function botaoclicar(){
    var nome = window.prompt("Qual o seu nome?")
    var result = window.document.getElementsByClassName('resultado')[0]
    result.innerHTML = `<p>Olá <strong>${nome}</strong> É um prazer em  te conhecer &#x1F596</p>`
}