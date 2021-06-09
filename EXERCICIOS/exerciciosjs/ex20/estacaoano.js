function estacaoano()
{
    let mes = window.prompt("Digite um mês por extenso (ex:.Fevereiro)")
    let resultado = document.querySelector('div.div-p')
    let estacao 
    switch(mes.toUpperCase()){
        case 'JANEIRO' :case 'FEVEREIRO': case 'MARÇO':
            estacao = 'VERÃO'
            break;
        case 'SETEMBRO': case 'OUTUBRO' :case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break; 
        case 'JUNHO': case 'JULHO' :case 'AGOSTO':
            estacao = 'INVERNO'
            break; 
        case 'ABRIL': case 'MAIO' :
            estacao = 'OUTONO'
                break; 
    }
    resultado.innerHTML = `<p>No mês de ${mes} a estação é <strong>${estacao}</strong></p>`
    
}