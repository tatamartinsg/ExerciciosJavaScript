function idade()
{
    let ano = Number(window.prompt("Digite o ano em que nasceu"));
    let idade = Number(2021 - ano);
    let mostrar = document.getElementsByClassName('div-p')[0];
    mostrar.innerHTML = `<p>Quem nasceu em ${ano} vai completar <strong>${idade}</strong> em 2021!</p>`
}