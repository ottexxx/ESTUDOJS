let nome = prompt("Digite seu nome:");
let genero = prompt("Digite 'F' para feminino ou 'M' para masculino:");
let idade = prompt("Digite sua idade:");
let tempoC = prompt("Digite seu tempo de contribuição:");


if(genero == 'M') {
    if(tempoC >= 35){
        document.getElementById('info').innerHTML = `Já pode se aposentar!!!`;
    } else {
        document.getElementById('info').innerHTML = `Ainda não pode se aposentar :( Falta ${tempoC-35} anos para aposentadoria.`;
    }
}

if(genero == 'F') {
    if(tempoC >= 30){
        document.getElementById('info').innerHTML = `Já pode se aposentar!!!!!!`;
    } else {
        document.getElementById('info').innerHTML = `Ainda não pode se aposentar :( Falta ${tempoC - 30} anos para aposentadoria.`;
    }
} else {
    document.getElementById('info').innerHTML = `Resposta Inválida`;
}