function adivinhanumero()
{
    let mostrar = document.querySelector('div.div-p')
    let numero = Number(window.prompt("Digite um número"))
    let num_aleatorio = Math.floor(Math.random() * 100)

    if(num_aleatorio == numero)
    {
        mostrar.innerHTML += `<p>PARABÉNS! Você digitou ${numero}. Meu numero ${num_aleatorio} é <strong>IGUAL</strong></p>` 
        document.getElementById('botao').style.visibility = 'hidden'
    }
    else if(num_aleatorio > numero)
    {
        mostrar.innerHTML += `<p>Você digitou ${numero}. Meu numero ${num_aleatorio} é <strong>MAIOR</strong></p>` 
    }
    else if(num_aleatorio < numero)
    {
        mostrar.innerHTML += `<p>Você digitou ${numero}. Meu numero ${num_aleatorio} é <strong>MENOR</strong></p>` 
    }
}