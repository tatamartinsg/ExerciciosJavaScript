const $pega_div = document.querySelector('#area')

$pega_div.addEventListener('click', () => {
    $pega_div.innerText = 'Clicou!'
    $pega_div.style.background='red'
})

$pega_div.addEventListener('mouseenter', () => {
    $pega_div.innerText = 'Entrou!'
    $pega_div.style.background = 'green'
})

$pega_div.addEventListener('mouseout', () => {
    $pega_div.innerText = 'Saiu!'
    $pega_div.style.background = 'black'
})