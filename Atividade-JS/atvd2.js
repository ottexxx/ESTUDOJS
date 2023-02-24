let temperaturaC = parseInt(prompt("Digite a temperatura em C° para converter:"))

tempTotal = (temperaturaC * 9 /5) + 32

document.getElementById('info').innerHTML = `A sua temperatura em fahrenheit é: ${tempTotal}`