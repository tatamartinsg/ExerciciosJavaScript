function addItem()
{
    var ul = document.getElementById("dynamic-list")
    var tarefatxt = document.getElementById("tarefatxt")
    var li = document.createElement("li")
    li.setAttribute('id',tarefatxt.value)
    li.appendChild(document.createTextNode(tarefatxt.value))
    ul.appendChild(li)
}

function removeItem()
{
    var ul = document.getElementById("dynamic-list")
    var tarefatxt = document.getElementById("tarefatxt")
    var item = document.getElementById(tarefatxt.value)
    ul.removeChild(item)
}