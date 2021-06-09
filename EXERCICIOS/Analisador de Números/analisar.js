function analisar()
{
    var qntd = 0
    var input = document.querySelector('input.input-c')
    var select_input = document.querySelector('select.select-lista')
    var valor_armazenado = input.value

    
    var item = document.createElement('option')
    item.text = `Valor ${valor_armazenado} adicionado.`
    select_input.appendChild(item)
    
    console.log(valor_armazenado)

    
}