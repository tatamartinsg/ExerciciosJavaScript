function maior()
{
    let num1 = Number(window.prompt("Digite um número"))
    let num2 = Number(window.prompt("Digite outro número"))
    let maior = window.document.getElementsByClassName('div-p')[0]
    if(num1>num2)
    {
        maior.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num1}</strong></p>`
    }
    else if(num2>num1)
    {
        maior.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num2}</strong></p>`
    }
    else if (num1==num2)
    {
        maior.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos os valores são <strong>IGUAIS!</strong></p>`
    }
}