//<h1>Interagindo com um botão</h1>
//<button class="botao" onclick="clique()">Clica em mim!</button>  
function clique()
{
    var click = window.document.getElementsByClassName('botao')[0]
    window.alert('Você clicou no botão!')
    click.innerHTML='Clicou!'

}