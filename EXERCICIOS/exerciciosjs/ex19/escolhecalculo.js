function escolhecalculo()
{
    let valor1 = Number(window.prompt("Digite um valor"))
    let valor2 = Number(window.prompt("Digite outro valor"))
    let escolha_calculo = Number(window.prompt(`Valores informados: ${valor1} e ${valor2}! Escolha a operação:\n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let mostrar = document.getElementsByClassName('h2')[0]
    mostrar.innerHTML = `<p>Calculando...</p>`
    let resultado = document.getElementsByClassName('div-p')[0]
    
    if (escolha_calculo == 1)
    {
        let soma = valor1 + valor2;
        resultado.innerHTML = `<p>A soma de <strong>${valor1}</strong> e <strong>${valor2}</strong> é igual a <strong><mark>${soma}</mark></strong>!</p>`
    }
    else if(escolha_calculo == 2)
    {
        let sub = valor1 - valor2;
        resultado.innerHTML = `<p>A subtração de <strong>${valor1}</strong> e <strong>${valor2}</strong> é igual a <strong><mark>${sub}</mark></strong>!</p>`
    }
    else if(escolha_calculo == 3)
    {
        let mult = valor1*valor2;
        resultado.innerHTML = `<p>A multiplicação de <strong>${valor1}</strong> e <strong>${valor2}</strong> é igual a <strong><mark>${mult}</mark></strong>!</p>`
    }
    else if(escolha_calculo == 4 )
    {
        let divi = valor1/valor2;
        resultado.innerHTML = `<p>A divisão de <strong>${valor1}</strong> e <strong>${valor2}</strong> é igual a <strong><mark>${divi}</mark></strong>!</p>`
    }
    else
    {
        resultado.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou <strong>${valor1}</strong> e <strong>${valor2}</strong>, mas não sei o que fazer com eles.</p>`
    }
}