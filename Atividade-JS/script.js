let nome;
nome  = prompt("Digite seu nome:");

let anoNascimento = parseInt(prompt("Digite o ano que você nasceu:"));

let anoAtual = parseInt(prompt("Digite o ano que você está:"));

let idade = anoAtual-anoNascimento;

if(idade >= 16 && idade < 18) {
    document.getElementById('info').innerHTML = `Seu nome é ${nome}, você tem ${idade} anos, pode votar e não pode tirar a habilitação.`;
} else if(idade <=18) {
    document.getElementById('info').innerHTML = `Seu nome é ${nome}, você tem ${idade} anos, pode votar e pode tirar a habilitação!!`;
} else {
    document.getElementById('info').innerHTML = `Seu nome é ${nome}, você tem ${idade} anos, não pode votar e não pode tirar a habilitação.`;
}