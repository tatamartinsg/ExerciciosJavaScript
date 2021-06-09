function envie()
{
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var pais = String(txtv.value)
    switch(pais.toUpperCase)
    {
        case 'BRASIL':
            res.innerHTML = `<p>Você nasceu no ${pais}, logo, você é brasileiro(a)!</p>`
        break;
        default:
            res.innerHTML = `<p>Você nasceu no ${pais}, logo, você é estrangeiro(a)!</p>`
        break

    }

    console.log("uai")
}