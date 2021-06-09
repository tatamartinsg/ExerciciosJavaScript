function verificarIdade()
{
    var input = document.querySelector('input.c-input')
    var test = Number(input.value)
    console.log(test)

    var ano_atual = new Date()
    // console.log(ano_atual.getFullYear())
    var ano_atual2 = ano_atual.getFullYear()

    var idade = ano_atual2 - test
    console.log(idade)
    var res = document.querySelector('p.div-p')

    var genero = ''
    var img = document.createElement('img')
    var fsex = document.getElementsByName('radsex')
    if (test<=0)
    {
        window.alert("Data inválida.")
    }
    else
    {
        if(fsex[0].checked)
        {
            // genero = 'Homem'
            if (idade >=0 && idade <=12)
            {
                genero = 'Criança'
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if(idade>12 && idade<30)
            {
                genero = 'Jovem'
                img.setAttribute('src','foto-jovem-m.png')
            }
            else if(idade>=30 && idade<=55)
            {
                genero = 'Adulto'
                img.setAttribute('src','foto-adulto-m.png')
            }
            else if(idade>55)
            {
                genero = 'Idoso'
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
            else if (fsex[1].checked)
            {
                // genero = 'Mulher'
                if (idade >=0 && idade <=12)
                {
                    genero = 'Criança'
                    img.setAttribute('src','foto-bebe-f.png')
                }
                else if(idade>12 && idade<30)
                {
                    genero = 'Jovem'
                    img.setAttribute('src','foto-jovem-f.png')
                }
                else if(idade>=30 && idade<=55)
                {
                    genero = 'Adulta'
                    img.setAttribute('src','foto-adulto-f.png')
                }
                else if(idade>55)
                {
                    genero = 'Idosa'
                    img.setAttribute('src','foto-idoso-f.png')
                }
            }

            res.getElementsByClassName.textAllign = 'center'
            res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
            res.innerHTML += '<br>'
            res.appendChild(img)
    
        }
        




}