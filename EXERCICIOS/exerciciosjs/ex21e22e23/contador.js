function contador()
{
    let mostrar = document.querySelector('div.div-p-h2')
    mostrar.innerHTML += `<h2>Contando de 1 a 10</h2>`
    for (i = 1; i <= 10; i++){

        //exercicio 22
        // if(i%2==0)
        // {
        //     mostrar.innerHTML += `<strong><mark>${i}</mark></strong> &#x1F449;`
        // }
        // else
        // {
        //     mostrar.innerHTML += `${i} &#x1F449;`
        // }
        //exercicio 23
        // if(i%2 == 0)
        // {
        //     mostrar.innerHTML += `<strong><mark>${i}</mark></strong> &#x1F449;`
        // }
    }
    mostrar.innerHTML += `&#x1F3C1;`
}