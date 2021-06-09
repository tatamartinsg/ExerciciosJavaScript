function calculos()
{
    let num = Number(window.prompt("Digite um número: "))
    resultado = window.document.getElementsByClassName('div-p')[0]
    resultado.innerHTML = `<p>O número a ser analisado aqui é o <strong> ${num} </strong></p><hr>
    <p>O seu valor absoluto é ${Math.abs(num)}</p>
    <p> A sua parte inteira é ${Math.trunc(num)}</p>
    <p>O valor inteiro mais próximo é ${Math.floor(num)}</p>
    <p>A sua raiz quadradada é de ${Math.sqrt(num)} </p>
    <p>A sua raiz cúbica é de ${Math.cbrt(num)}<p>
    <p>O valor de ${num}<sup>2</sup> é ${Math.pow(num,2)} </p>
    <p>O valor de ${num}<sup>3</sup> é ${Math.pow(num,3)} </p>
    `
    
}