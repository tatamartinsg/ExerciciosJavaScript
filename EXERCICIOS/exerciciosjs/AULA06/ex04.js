var nome = window.prompt("Qual é o seu nome? ");
document.write(`<p class="NOME">Seu nome tem ${nome.length} letras</p>`);
document.write(`Seu nome em MAIUSCULA é : ${nome.toLocaleUpperCase()}`);
document.write(`Seu nome em minuscula é: ${nome.toLowerCase()}`);