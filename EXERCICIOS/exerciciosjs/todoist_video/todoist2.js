

function remove_task(armazena_valor)
{
    console.log("clicou")
}

function clicar_botao()
{
    var receber_valor = document.querySelector('input.tarefatxt')
    var ul = document.querySelector('ul.ul-list')
    var armazena_valor = String(receber_valor.value)

    var li = document.createElement('li')
    li.setAttribute('class',armazena_valor)
    li.appendChild(document.createTextNode(armazena_valor))
    ul.appendChild(li)

    if((armazena_valor == '') || (!armazena_valor.trim()==true))
    { //se a pessoa digitar nada ou apenas espaços, dê a mensagem de alerta:
        window.alert("Você digitou uma tarefa em branco! Por favor, digite novamente.")
    }
    // else
    // {
    //     mostrar.innerHTML += `<p onclick="teste()">${armazena_valor} </p> <img onclick="remove_task(armazena_valor)" src= remove.png>`
    // }

}


function teste()
{
    var mostra2 = document.querySelector('div.ul-list')
    console.log("clicou!")
    var armazena_valor2 = String(receber_valor.value)
    // p.style.background = 'red';
    // mostra2.style.text.Decoration = 'line-through'
    
}